import { Injectable } from '@nestjs/common';
import { RankingsData, RankingsPeriod, RankingsSearch, UsersRankings } from './people.interface';
import { HttpProxyService } from 'src/common/http-proxy.service';
import { InvestorSearchQueryParams } from './rankinings/rankings-query-filters';

@Injectable()
export class PeopleService {
    private rankingsApiUrl = '/sapi/rankings/rankings';

    constructor(
        private readonly httpService: HttpProxyService
    ) {
    }

    public async search(period: RankingsPeriod, filters: Partial<InvestorSearchQueryParams>): Promise<RankingsSearch> {
        return await this.getRankings(period, filters).then((data) => {
            if (data?.Items?.length > 0) {
                data.Items = data.Items.map((item) => this.transformRankingsData(item));
            }

            return data;
        });
    }

    public async getByUserId(cid: number, period: RankingsPeriod = RankingsPeriod.CurrQuarter): Promise<RankingsData> {
        return await this.getUsersRanking(cid, period).then((item) => {
            return this.transformRankingsData(item);
        });
    }

    public async getByUsersIds(cids: number[], period: RankingsPeriod = RankingsPeriod.CurrQuarter): Promise<UsersRankings[]> {
        return await this.getUsersRankings(cids, period).then((data) => {
            if (data?.length > 0) {
                return data.map((item) => {
                    item.Value = this.transformRankingsData(item.Value);
                    return item;
                });
            }

            return data;
        });
    }

    private async getUsersRankings(cids: number[], period: RankingsPeriod): Promise<UsersRankings[]> {
        return await this.httpService.post<UsersRankings[]>(`${this.rankingsApiUrl}/multiple`, cids, { period }).then((data) => {
            return data?.map((item) => {
                item.Value = this.transformRankingsData(item.Value);
                return item;
            });

            return data;
        });
    }

    private async getUsersRanking(cid: number, period: RankingsPeriod): Promise<RankingsData> {
        return await this.httpService.get<RankingsData>(`/sapi/rankings/cid/${cid}/rankings`, { period });
    }

    private async getRankings(period: RankingsPeriod, params: Partial<InvestorSearchQueryParams>): Promise<RankingsSearch> {
        const defaultParams: Partial<InvestorSearchQueryParams> = {
            period,
            blocked: false,
            copyblock:false,
            optin: true,
            istestaccount: false,
            verified: true,
            pagesize: Math.min(params.pagesize || 3, 3),
            gainmax: 1000
        };

        return await this.httpService.get<RankingsSearch>(this.rankingsApiUrl, { ...defaultParams, ...params });
    }

    private transformRankingsData(data: RankingsData): RankingsData {
        if (!data || !data.UserName) return null;

        return {
            CustomerId: data.CustomerId,
            UserName: data.UserName,
            PopularInvestor: data.PopularInvestor,
            IsFund: data.IsFund,
            Gain: data.Gain,
            DailyGain: data.DailyGain,
            ThisWeekGain: data.ThisWeekGain,
            RiskScore: data.RiskScore,
            Copiers: data.Copiers,
            CopiedTrades: data.CopiedTrades,
            CopyTradesPct: data.CopyTradesPct,
            CopyInvestmentPct: data.CopyInvestmentPct,
            BaseLineCopiers: data.BaseLineCopiers,
            AUMTierDesc: data.AUMTierDesc,
            Trades: data.Trades,
            WinRatio: data.WinRatio,
            DailyDD: data.DailyDD,
            WeeklyDD: data.WeeklyDD,
            ProfitableWeeksPct: data.ProfitableWeeksPct,
            ProfitableMonthsPct: data.ProfitableMonthsPct,
            Velocity: data.Velocity,
            Exposure: data.Exposure,
            AvgPosSize: data.AvgPosSize,
            LongPosPct: data.LongPosPct,
            TopTradedInstrumentId: data.TopTradedInstrumentId,
            TopTradedAssetClassId: data.TopTradedAssetClassId,
            TopTradedInstrumentPct: data.TopTradedInstrumentPct,
            TotalTradedInstruments: data.TotalTradedInstruments,
            Country: data.Country,
            InstrumentPct: data.InstrumentPct,
            UserPageUrl: `https://www.etoro.com/people/${data.UserName}`
        } as RankingsData;
    }
}
