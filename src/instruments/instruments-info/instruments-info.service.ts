import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom, forkJoin, map } from 'rxjs';
import { AxiosError } from 'axios';
import { IndtrumentInfoESGRO, InstrumentInfoAnalystsForcastRQ, InstrumentInfoEarningsReportRO, InstrumentInfoOverviewRO, InstrumentInfoPopularMarketsRO, InstrumentInfoRO, InstrumentsInfoNewsRO } from './instruments-info.interface';
import { InstrumentsService } from '../instruments.service';
import { ConfigService } from '@nestjs/config';
import { InstrumentRO } from '../instruments.interface';
import { HttpProxyService } from 'src/common/http-proxy.service';
import { analystsForcastsFields, esgFields } from './instruments-info.constants';

@Injectable()
export class InstrumentsInfoService {
    private cityFalconApiUrl = 'https://www.cityfalcon.com/webapi';


    constructor(
        private readonly httpService: HttpProxyService,
        private readonly instrumentsService: InstrumentsService
    ) {

    }

    async getBySymbol(symbol: string, fields: string[] = []): Promise<InstrumentInfoRO> {
        const instrument = await this.getInstrmentBySymbol(symbol);

        return this.getInstrumentInfoWithFilter<InstrumentInfoRO>(instrument.id, InstrumentInfoFilters.CustomFields, fields);
    }

    //https://www.etoro.com/sapi/finapi/api/instruments/1001?PeriodIds=-1,-2,-3,-4
    // need to check this detailed earning reports api
    async getEarningsBySymbol(symbol: string): Promise<InstrumentInfoEarningsReportRO> {
        const instrument = await this.getInstrmentBySymbol(symbol);

        return this.getInstrumentInfoWithFilter<InstrumentInfoEarningsReportRO>(instrument.id, InstrumentInfoFilters.EarningsReport, []);
    }

    async getOverviewBySymbol(symbol: string): Promise<InstrumentInfoOverviewRO> {
        const instrument = await this.getInstrmentBySymbol(symbol);

        return this.getInstrumentInfoWithFilter<InstrumentInfoOverviewRO>(instrument.id, InstrumentInfoFilters.MarketOverview, []);
    }

    async getAnalystsForcast(symbol: string): Promise<InstrumentInfoAnalystsForcastRQ> {
        const instrument = await this.getInstrmentBySymbol(symbol);

        return this.getInstrumentInfoWithFilter<InstrumentInfoAnalystsForcastRQ>(instrument.id, InstrumentInfoFilters.CustomFields, analystsForcastsFields);
    }

    async getESG(symbol: string): Promise<IndtrumentInfoESGRO> {
        const instrument = await this.getInstrmentBySymbol(symbol);

        return this.getInstrumentInfoWithFilter<IndtrumentInfoESGRO>(instrument.id, InstrumentInfoFilters.CustomFields, esgFields);
    }

    async getPopularInstruments(): Promise<InstrumentInfoPopularMarketsRO> {
        return this.getInstrumentInfoWithFilter<InstrumentInfoPopularMarketsRO>(null, InstrumentInfoFilters.CustomFields, [
            'internalSymbolFull', 'popularityUniques7Day', 'displayname', 'BuyPctChange24Hours', 'BuyHoldingPct', 'SellHoldingPct', 'PopularityUniques'
        ], { sort: '-AbsBuyPctChange24Hours', PopularityUniquesMax: 600, IsInternalInstrument: false, popularityUniques7Daymin: 1, pageSize: 5 });
    }

    async getDebutantes(): Promise<InstrumentInfoRO[]> {
        return this.getInstrumentInfoWithFilter<InstrumentInfoRO[]>(null, InstrumentInfoFilters.CustomFields, [
            'instrumentid', 'firsttradedate', 'marketCapInUSD', 'displayname', 'popularityuniques', 'dayssincefirsttrade'
        ], { sort: 'dayssincefirsttrade,popularityuniques', pageSize: 5, DaysSinceFirstTradeMax: 180, PopularityUniquesMax: 5000, IsHiddenFromClient: false, IsInternalInstrument: false })
    }

    async getDividends(): Promise<InstrumentInfoRO[]> {
        return this.getInstrumentInfoWithFilter<InstrumentInfoRO[]>(null, InstrumentInfoFilters.CustomFields, [
            'instrumentid', 'displayname', 'DividendAnnouncementDate', 'DividendFrequency', 'DividendPayDate', 'DividendRecordDate', 'DividendStatus', 'DividendStatusDate', 'LastXDividendDate', 'OriginalCurrency', 'OriginalCurrencyAmount', 'XDividend', 'DaystillDividendXdate'
        ], { sort: 'DaystillDividendXdate', DaystillDividendXdateMin: 0, dividendstatus: 'p' })
    }

    async getUpcomingEarnings(): Promise<InstrumentInfoRO[]> {
        return this.getInstrumentInfoWithFilter<InstrumentInfoRO[]>(null, InstrumentInfoFilters.CustomFields, [
            'displayname', 'NextEarningDate', 'NextEarningTime', 'FiscalYear=NextEDFiscalYear', 'NextEarningsDateQuarter', 'QuarterlyEPSValue', 'QuarterlySalesValue', 'MarketCapitalization=MarketCapitalization-Annual', 'QuarterlyEPSEstimates', 'ConferenceCallBroadcastURL', 'ReplayDate', 'ReplayWebcastURL', 'ConferenceCallDate', 'ConferenceCallTime', 'QuarterlyEPSMedian', 'QuarterlySalesMedian', 'Currency', 'InternalIndustryId'
        ], { sort: 'daysTillNextEarningReport,-marketcapitalization-annual', DaysTillNextEarningReportmin: 0, IsDelisted: false, IsInternalInstrument: false, IsHiddenFromClient: false, pageSize: 5 });
    }

    private async getInstrmentBySymbol(symbol: string): Promise<InstrumentRO> {
        if (typeof symbol !== 'string') {
            throw 'Symbol must be a string';
        }
        const instrument = await this.instrumentsService.getBySymbol(symbol.toUpperCase());

        if (!instrument) {
            throw 'Instrument not found';
        }

        return instrument;
    }


    public async getInstrumentInfoWithFilter<T>(insrumentId: number, filter: InstrumentInfoFilters, fields: string[] = [], oParams?: { [name: string]: any }): Promise<T> {
        const params = { isdelisted: false, isinternalinstrument: false, ishiddenfromclient: false };

        if (fields.length > 0) {
            params['fields'] = fields.join(',');
        }
        if (oParams) {
            Object.assign(params, oParams);
        }

        let path = '';

        if (insrumentId) {
            path += (insrumentId + '/');
        }

        if (filter) {
            path += filter;
        }

        return await this.httpService.get<T>(`/sapi/instrumentsinfo/instruments/${path}`, params);
    }


    //    https://www.cityfalcon.com/webapi/v1/stories?query=tsla,goog&limit=5&order_by=latest&time_filter=week1&languages=en&registration_required=false&paywall=false&with_sentiments=true&fold_similar_stories=false&fields=id,imageUrls,sentiment,domain_name,publishTime,url,title,description,domain_cached_large_logo_url&client=01012006&min_score=8
    public async getNews(symbols: string[]): Promise<InstrumentsInfoNewsRO> {
        const topics = await this.getNewsTopics(symbols);

        const res = topics.map((topic) => this.getNewsByTopic(topic));
        return await firstValueFrom(
            forkJoin(res).pipe(
                map((response) => {
                    return response.reduce((acc, val) => {
                        acc.stories = acc.stories.concat(val.stories);
                        return acc;
                    });
                }
                ),
                catchError((error: AxiosError) => {
                    console.log(error);
                    throw error;
                })
            )
        );
    }

    private async getNewsByTopic(topic: string): Promise<InstrumentsInfoNewsRO> {
        const params = {
            query: topic,
            limit: 1,
            order_by: 'latest',
            time_filter: 'week1',
            languages: 'en',
            registration_required: false,
            paywall: false,
            with_sentiments: true,
            fold_similar_stories: false,
            fields: 'id,imageUrls,sentiment,domain_name,publishTime,url,title,description,domain_cached_large_logo_url',
            client: '01012006',
            min_score: 8
        };

        return await this.httpService.get<InstrumentsInfoNewsRO>(`${this.cityFalconApiUrl}/v1/stories`, params);
    }

    // https://www.cityfalcon.com/webapi/v1/topics/search?identifier_type=etoro_aliases&identifiers=aapl,GOOG&client=01012006
    private async getNewsTopics(symbol: string[]): Promise<string[]> {

        const params = {
            identifier_type: 'etoro_aliases',
            identifiers: symbol.join(','),
            client: '01012006'
        };

        return await this.httpService.get<NewsTopics>(`${this.cityFalconApiUrl}/v1/topics/search`, params)
            .then((data) => data?.topics?.map(t => t.group_query));
    }
}

export interface NewsTopics {
    topics: { group_query: string }[]
}


export enum InstrumentInfoFilters {
    MarketOverview = 'marketView',
    EarningsReport = 'earnings',
    popularityUniques = '',
    CustomFields = '',
}