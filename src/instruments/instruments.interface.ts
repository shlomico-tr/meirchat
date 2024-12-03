import { ApiProperty } from "@nestjs/swagger";

export class InstrumentRO {
    id: number;
    @ApiProperty({
        description: 'the display name of the instrument',
        type: 'string'
    })
    displayName: string;
    type: InstrumentTypeRO;
    exchange: ExchangeRO;
    @ApiProperty({
        description: 'company logo url',
        type: 'string'
    })
    logoUrl: string;
    symbolFull: string
    priceSource: string;
    cryptoCategory: CryptoCategoryRO;
    rate?: RateRO
    closingPrice?: ClosingPriceRO
}

export interface InstrumentTypeRO {
    url: string;
    name: string;
}

export interface ExchangeRO {
    url: string;
    name: string;
}

export interface CryptoCategoryRO {
    url: string;
    name: string;
}

export class RateRO {
    instrumentId: number;
    ask: number;
    bid: number;
    lastExecution: number;
    @ApiProperty({
        description: 'the date of the rate',
        type: 'string',
        format: 'date-time'
    })
    date: string;
}


export interface InstrumentMetadata {
    InstrumentID: number
    InstrumentDisplayName: string
    InstrumentTypeID: number
    ExchangeID: number
    Images: InstrumentImage[]
    SymbolFull: string
    PriceSource: string
    HasExpirationDate: boolean
    IsInternalInstrument: boolean
    InstrumentTypeSubCategoryID?: number;
}

export interface RateData {
    InstrumentID: number
    Ask: number
    Bid: number
    LastExecution: number
    ConversionRateAsk: number
    ConversionRateBid: number
    Date: string
    UnitMargin: number
    UnitMarginAsk: number
    UnitMarginBid: number
    PriceRateID: number
    BidDiscounted: number
    AskDiscounted: number
    UnitMarginBidDiscounted: number
    UnitMarginAskDiscounted: number
}

export interface InstrumentImage {
    InstrumentID: number
    Width?: number
    Height?: number
    Uri: string
    BackgroundColor?: string
    TextColor?: string
}

export enum InstrumentType {
    Stocks = 5,
    Cryptocurrencies = 10,
    ETF = 6,
    Commodities = 2,
    Currencies = 1,
    Indices = 4,
}

export enum CryptoCategory {
    Coins = 1001,
    CurrencyCrosses = 1002,
    CryptoCrosses = 1003,
    CommodityCrosses = 1004
}

export enum Exchange {
    NASDAQ = 4,
    NYSE = 5,
    Frankfurt = 6,
    London = 7,
    Paris = 9,
    BolsaDeMadrid = 10,
    BorsaItaliana = 11,
    Zurich = 12,
    Oslo = 14,
    Stockholm = 15,
    Copenhagen = 16,
    Helsinki = 17,
    HongKong = 21,
    Lisbon = 22,
    Brussels = 23,
    Tadawul = 24,
    Amsterdam = 30
}

export enum StockIndustry {
    BasicMaterials = 1,
    Conglomerates = 2,
    ConsumerGoods = 3,
    Financial = 4,
    Healthcare = 5,
    IndustrialGoods = 6,
    Services = 7,
    Technology = 8,
    Utilities = 9
}

export class ClosingPriceRO {
    instrumentId: number;
    officialClosingPrice: number;
    isMarketOpen: boolean;
    closingPrices: {
        daily: ClosingPricePeriod;
        weekly: ClosingPricePeriod;
        monthly: ClosingPricePeriod;
    }
}

export interface ClosingPrice {
    InstrumentId: number
    OfficialClosingPrice: number
    IsMarketOpen: boolean
    ClosingPrices: {
        Daily: ClosingPricePeriod
        Weekly: ClosingPricePeriod
        Monthly: ClosingPricePeriod
    }
}

export interface ClosingPricePeriod {
    Price: number
    Date: string
}
