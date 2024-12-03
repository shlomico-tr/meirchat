import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsString } from "class-validator";



export class UserRankings {
    Data: RankingsData;
}

export class RankingsData {
    @ApiProperty({ type: 'integer', description: 'etoro customer ID' })
    CustomerId: number;
    @ApiProperty({ type: 'string', description: 'etoro username' })
    UserName: string;
    @ApiProperty({ type: 'string', description: 'etoro full name' })
    FullName: string;
    @ApiProperty({ type: 'boolean', description: 'user has an avatar' })
    HasAvatar: boolean;
    @ApiProperty()
    IsSocialConnected: boolean;
    @ApiProperty( {type: 'boolean', description: 'is test account'})
    IsTestAccount: boolean;
    @ApiProperty()
    DisplayFullName: boolean;
    @ApiProperty()
    BonusOnly: boolean;
    @ApiProperty({ type: 'boolean', description: 'is blocked' })
    Blocked: boolean;
    @ApiProperty({ type: 'boolean', description: 'is verified' })
    Verified: boolean
    @ApiProperty()
    PopularInvestor: boolean;
    @ApiProperty()
    CopyBlock: boolean;
    @ApiProperty()
    IsFund: boolean;
    @ApiProperty()
    IsBronze: boolean;
    @ApiProperty()
    FundType: number;
    @ApiProperty()
    Tags: number[];
    @ApiProperty()
    Gain: number;
    @ApiProperty()
    DailyGain: number;
    @ApiProperty()
    ThisWeekGain: number;
    @ApiProperty()
    RiskScore: number;
    @ApiProperty()
    MaxDailyRiskScore: number;
    @ApiProperty()
    MaxMonthlyRiskScore: number;
    @ApiProperty()
    Copiers: number;
    @ApiProperty()
    CopiedTrades: number;
    @ApiProperty()
    CopyTradesPct: number;
    @ApiProperty()
    CopyInvestmentPct: number;
    @ApiProperty()
    BaseLineCopiers: number;
    @ApiProperty()
    CopiersGain: number;
    @ApiProperty()
    AUMTier: number;
    @ApiProperty()
    AUMTierV2: number;
    @ApiProperty()
    AUMTierDesc: string;
    @ApiProperty()
    VirtualCopiers: number;
    @ApiProperty()
    Trades: number;
    @ApiProperty()
    WinRatio: number;
    @ApiProperty()
    DailyDD: number;
    @ApiProperty()
    WeeklyDD: number;
    @ApiProperty()
    ProfitableWeeksPct: number;
    @ApiProperty()
    ProfitableMonthsPct: number;
    @ApiProperty()
    Velocity: number;
    @ApiProperty()
    Exposure: number;
    @ApiProperty()
    AvgPosSize: number;
    @ApiProperty()
    OptimalCopyPosSize: number;
    @ApiProperty()
    HighLeveragePct: number;
    @ApiProperty()
    MediumLeveragePct: number;
    @ApiProperty()
    LowLeveragePct: number;
    @ApiProperty()
    PeakToValley: number;
    @ApiProperty()
    PeakToValleyStart: string;
    @ApiProperty()
    PeakToValleyEnd: string;
    @ApiProperty()
    LongPosPct: number;
    @ApiProperty()
    TopTradedInstrumentId: number;
    @ApiProperty()
    TopTradedAssetClassId: number;
    @ApiProperty()
    TopTradedInstrumentPct: number;
    @ApiProperty()
    TotalTradedInstruments: number;
    @ApiProperty()
    ActiveWeeks: number;
    @ApiProperty()
    FirstActivity: string;
    @ApiProperty()
    LastActivity: string;
    @ApiProperty()
    ActiveWeeksPct: number;
    @ApiProperty()
    WeeksSinceRegistration: number;
    @ApiProperty()
    Country: string;
    @ApiProperty()
    AffiliateId: number;
    @ApiProperty()
    InstrumentPct: number;
    @ApiProperty({ type: 'string', description: 'user page url'})
    UserPageUrl: string;
}

export class RankingsSearch {
    @ApiProperty({ type: 'string', description: 'response status'})
    Status: string;
    @ApiProperty({ type: 'number', description: 'rows count'})
    TotalRows: number;
    @ApiProperty({ type: [RankingsData], description: 'the rankings data'})
    Items: RankingsData[]
}

export class UsersRankings {
    @ApiProperty({ type: 'integer', description: 'etoro customer ID'})
    CID: number;

    @ApiProperty({type: RankingsData, description: 'rankings data'})
    Value: RankingsData;
}

export enum RankingsPeriod {
    CurrMonth = 'CurrMonth',
    OneMonthAgo = 'OneMonthAgo',
    TwoMonthsAgo = 'TwoMonthsAgo',
    CurrQuarter = 'CurrQuarter',
    ThreeMonthsAgo = 'ThreeMonthsAgo',
    SixMonthsAgo = 'SixMonthsAgo',
    CurrYear = 'CurrYear',
    OneYearAgo = 'OneYearAgo',
    LastYear = 'LastYear',
    LastTwoYears = 'LastTwoYears'
}


export class SearchRankingsQuery {
    @IsInt()
    @Type(() => Number)
    country: number;

    @IsString()
    name: string;
    public period: RankingsPeriod;
    public filters: { [name: string]: any };
}
