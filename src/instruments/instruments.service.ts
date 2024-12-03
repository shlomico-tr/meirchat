import { Injectable } from '@nestjs/common';
import { ClosingPrice, ClosingPriceRO, CryptoCategory, CryptoCategoryRO, Exchange, ExchangeRO, InstrumentMetadata, InstrumentRO, InstrumentType, InstrumentTypeRO, RateData, RateRO } from './instruments.interface';
import { catchError, firstValueFrom, map } from 'rxjs';
import { AxiosError } from 'axios';
import { HttpProxyService } from 'src/common/http-proxy.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class InstrumentsService {
    private instruments: Map<string, InstrumentRO> = new Map();
    private closingPrices: Map<number, ClosingPriceRO> = new Map();
    private instrumentsById: Map<number, InstrumentRO> = new Map();

    private exchangeUrl: Map<Exchange, string> = this.getExchangeUrlsMap();
    private instrumentTypeUrl: Map<InstrumentType, string> = this.getInstrumentsTypesUrl();
    private cryptoCategoryUrl: Map<CryptoCategory, string> = this.getCryptoCategoryUrl();

    constructor(
        private readonly httpService: HttpProxyService
    ) {

        this.setClosingPricesCache().catch((error) => {
            console.log(error);
        });
        this.setInstrumentsCache().catch((error) => {
            console.log(error);
        });
    }

    getById(id: number): InstrumentRO {
        if (typeof id !== 'number') {
            throw 'Id must be a number';
        }

        return this.instrumentsById.get(id);
    }

    async getBySymbol(symbol: string, config: GetInstrumentOptions = { includeRate: false, includeClosingPrice: false }): Promise<InstrumentRO> {
        if (typeof symbol !== 'string') {
            throw 'Symbol must be a string';
        }

        const instrument = this.instruments.get(symbol.toUpperCase());

        if (config.includeRate) {
            const rate = await this.getInstrumentsRates([instrument.id]);

            if (rate?.length > 0) {
                instrument.rate = rate[0];
            }
        }

        if (config.includeClosingPrice) {
            const closingPrice = this.closingPrices.get(instrument.id);
            console.log(closingPrice, 'closingPrice');
            if (closingPrice) {
                instrument.closingPrice = closingPrice;
            }
        }

        return instrument;
    }

    async getBySymbols(symbols: string[], config: GetInstrumentOptions = { includeRate: false, includeClosingPrice: false }): Promise<InstrumentRO[]> {
        if (!Array.isArray(symbols)) {
            throw 'Symbols must be an array';
        }

        const instruments = symbols.map((symbol) => this.instruments.get(symbol.toUpperCase())).filter((instrument) => !!instrument);

        if (config.includeRate) {
            const instrumentsIds = instruments.map((instrument) => instrument.id);
            const rates = await this.getInstrumentsRates(instrumentsIds);

            instruments.forEach((instrument) => {
                const rate = rates.find((rate) => rate.instrumentId === instrument.id);
                if (rate) {
                    instrument.rate = rate;
                }
            });

        }

        if (config.includeClosingPrice) {
            instruments.forEach((instrument) => {
                const closingPrice = this.closingPrices.get(instrument.id);
                if (closingPrice) {
                    instrument.closingPrice = closingPrice;
                }
            });
        }


        return instruments;
    }

    @Cron(CronExpression.EVERY_HOUR)
    private async setInstrumentsCache() {
        const instrumentsMetadata = await this.getInstrumentsMetadata();
        instrumentsMetadata.forEach((md) => {
            const instrument = this.transformInstrumentMetadata(md);
            this.instruments.set(md.SymbolFull, instrument);
            this.instrumentsById.set(md.InstrumentID, instrument);
        });
    }

    @Cron(CronExpression.EVERY_10_MINUTES)
    private async setClosingPricesCache() {
        const closingPrices = await this.getClosingPrices();
        closingPrices.forEach((cp) => {
            this.closingPrices.set(cp.instrumentId, cp);
        });
    }

    private async getClosingPrices() {
        return this.httpService.get<ClosingPrice[]>('https://api.etorostatic.com/sapi/candles/closingprices.json').then((closingPrices) => {
            return closingPrices.map((cp) => this.transformClosingPrice(cp));
        });
    }

    private transformClosingPrice(cp: ClosingPrice): ClosingPriceRO {
        return {
            instrumentId: cp.InstrumentId,
            officialClosingPrice: cp.OfficialClosingPrice,
            isMarketOpen: cp.IsMarketOpen,
            closingPrices: {
                daily: cp.ClosingPrices.Daily,
                weekly: cp.ClosingPrices.Weekly,
                monthly: cp.ClosingPrices.Monthly,
            }
        };
    }

    private transformInstrumentMetadata(instrumentMetadata: InstrumentMetadata): InstrumentRO {
        return {
            id: instrumentMetadata.InstrumentID,
            displayName: instrumentMetadata.InstrumentDisplayName,
            type: this.getInstrumentType(instrumentMetadata.InstrumentTypeID),
            exchange: this.getExchange(instrumentMetadata.ExchangeID),
            logoUrl: instrumentMetadata.Images.find((image) => image.Width === 150 && image.Height === 150)?.Uri,
            symbolFull: instrumentMetadata.SymbolFull,
            priceSource: instrumentMetadata.PriceSource,
            cryptoCategory: instrumentMetadata.InstrumentTypeID === InstrumentType.Cryptocurrencies ? this.getCryptoCategory(instrumentMetadata.InstrumentTypeSubCategoryID) : null,
        };
    }

    private getCryptoCategory(instrumentTypeID: number): CryptoCategoryRO {
        return {
            url: this.cryptoCategoryUrl.get(instrumentTypeID),
            name: CryptoCategory[instrumentTypeID],
        }
    }

    private getInstrumentType(instrumentTypeID: number): InstrumentTypeRO {
        return {
            url: this.instrumentTypeUrl.get(instrumentTypeID),
            name: InstrumentType[instrumentTypeID],
        }
    }

    private getExchange(exchangeID: number): ExchangeRO {
        return {
            url: this.exchangeUrl.get(exchangeID),
            name: Exchange[exchangeID]
        }
    }

    private async getInstrumentsRates(instrumentsIds: number[]): Promise<RateRO[]> {
        if (!Array.isArray(instrumentsIds)) {
            throw 'Instruments IDs must be an array';
        }

        return this.httpService.get<any>(`/sapi/trade-real/rates/`, {
            params: { InstrumentIDs: instrumentsIds.join(',') }
        }).then(data => {
            return (data.Rates as RateData[]).map((rate) => this.transformRateData(rate));
        })
    }

    private transformRateData(rate: RateData): RateRO {
        return {
            instrumentId: rate.InstrumentID,
            ask: rate.Ask,
            bid: rate.Bid,
            lastExecution: rate.LastExecution,
            date: rate.Date
        };
    }

    private async getInstrumentsMetadata() {
        return await this.httpService.get<any>(`/sapi/instrumentsmetadata/V1.1/instruments/bulk?bulkNumber=1&totalBulks=1`).then((data) => {
            return data.InstrumentDisplayDatas as InstrumentMetadata[];
        });
    }

    private getCryptoCategoryUrl(): Map<CryptoCategory, string> {
        const baseUrl = 'https://www.etoro.com/discover/markets/cryptocurrencies';
        const cryptoCategoryUrl = new Map([
            [CryptoCategory.Coins, `${baseUrl}/coins`],
            [CryptoCategory.CurrencyCrosses, `${baseUrl}/currency-crosses`],
            [CryptoCategory.CryptoCrosses, `${baseUrl}/crypto-crosses`],
            [CryptoCategory.CommodityCrosses, `${baseUrl}/commodity-crosses`]
        ]);

        return cryptoCategoryUrl;
    }

    private getInstrumentsTypesUrl() {
        const baseDiscoverMarketsUrl = 'https://www.etoro.com/discover/markets';
        const instrumentTypeUrl = new Map([
            [InstrumentType.Stocks, `${baseDiscoverMarketsUrl}/stocks`],
            [InstrumentType.Cryptocurrencies, `${baseDiscoverMarketsUrl}/cryptocurrencies`],
            [InstrumentType.ETF, `${baseDiscoverMarketsUrl}/etf`],
            [InstrumentType.Commodities, `${baseDiscoverMarketsUrl}/commodities`],
            [InstrumentType.Currencies, `${baseDiscoverMarketsUrl}/currencies`],
            [InstrumentType.Indices, `${baseDiscoverMarketsUrl}/indices`],
        ]);

        return instrumentTypeUrl;
    }

    private getExchangeUrlsMap(): Map<Exchange, string> {
        const screenerUrl = 'https://www.etoro.com/discover/screener'
        const exchangeUrl = new Map([
            [Exchange.NASDAQ, `${screenerUrl}?InternalExchangeId=${Exchange.NASDAQ}`],
            [Exchange.NYSE, `${screenerUrl}?InternalExchangeId=${Exchange.NYSE}`],
            [Exchange.Frankfurt, `${screenerUrl}?InternalExchangeId=${Exchange.Frankfurt}`],
            [Exchange.London, `${screenerUrl}?InternalExchangeId=${Exchange.London}`],
            [Exchange.Paris, `${screenerUrl}?InternalExchangeId=${Exchange.Paris}`],
            [Exchange.BolsaDeMadrid, `${screenerUrl}?InternalExchangeId=${Exchange.BolsaDeMadrid}`],
            [Exchange.BorsaItaliana, `${screenerUrl}?InternalExchangeId=${Exchange.BorsaItaliana}`],
            [Exchange.Zurich, `${screenerUrl}?InternalExchangeId=${Exchange.Zurich}`],
            [Exchange.Oslo, `${screenerUrl}?InternalExchangeId=${Exchange.Oslo}`],
            [Exchange.Stockholm, `${screenerUrl}?InternalExchangeId=${Exchange.Stockholm}`],
            [Exchange.Copenhagen, `${screenerUrl}?InternalExchangeId=${Exchange.Copenhagen}`],
            [Exchange.Helsinki, `${screenerUrl}?InternalExchangeId=${Exchange.Helsinki}`],
            [Exchange.HongKong, `${screenerUrl}?InternalExchangeId=${Exchange.HongKong}`],
            [Exchange.Lisbon, `${screenerUrl}?InternalExchangeId=${Exchange.Lisbon}`],
            [Exchange.Brussels, `${screenerUrl}?InternalExchangeId=${Exchange.Brussels}`],
            [Exchange.Tadawul, `${screenerUrl}?InternalExchangeId=${Exchange.Tadawul}`],
            [Exchange.Amsterdam, `${screenerUrl}?InternalExchangeId=${Exchange.Amsterdam}`],
        ]);

        return exchangeUrl;
    }
}

interface GetInstrumentOptions {
    includeRate?: boolean;
    includeClosingPrice?: boolean;
}