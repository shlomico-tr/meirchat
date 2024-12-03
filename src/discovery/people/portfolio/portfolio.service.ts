import { Injectable, NotFoundException } from '@nestjs/common';
import { PublicPorfolioRO, PublicPortfolioData, PublicPortfolioItemData } from './portfolio.interface';
import { AxiosError } from 'axios';
import { InstrumentsService } from 'src/instruments/instruments.service';
import { PeopleService } from '../people.service';
import { RankingsData, RankingsPeriod } from '../people.interface';
import { HttpProxyService } from 'src/common/http-proxy.service';

@Injectable()
export class PortfolioService {

    constructor(
        private readonly httpService: HttpProxyService,
        private readonly instrumentsService: InstrumentsService,
        private readonly peopleService: PeopleService
    ) {
    }

    public async getByUserName(username: string): Promise<PublicPorfolioRO> {
        if(!username)  {
            throw new Error('username is required');
        }
            
        return this.getUserPortfolio(username).then((data) => {
            return this.parsePortfolioData(username, data);
        }).catch((error) => {
            if (error?.response?.status === 404) {
                throw new NotFoundException(`User ${username} not found, a valid username is required`);
            }
            
            throw error;
        });
    }

    private async parsePortfolioData(username: string, items: PublicPortfolioItemData[]): Promise<PublicPorfolioRO> {
        const portfolio: PublicPorfolioRO = {
            copiedInvestors: [],
            instrumets: [],
            availableCashPercentage: 0,
            portfolioUrl: `https://www.etoro.com/people/${username}/portfolio`
        }

        if (!items) return portfolio;


        const cids = items.filter((item) => item?.cid).map((item) => item.cid);
        const usersCidMap = await this.peopleService.getByUsersIds(cids, RankingsPeriod.CurrMonth).then((data) => {
            const map = new Map<number, Partial<RankingsData>>();
            data.forEach((item) => {
                if (item?.Value) {
                    map.set(item.CID, item.Value);
                }
            });
            return map;
        }).catch((error: AxiosError) => {
            return new Map<number, Partial<RankingsData>>();
        });

        items?.forEach((item) => {
            if (item) {
                if (item.isCash) {
                    portfolio.availableCashPercentage = item.percentage;
                } if (item.instrumentId) {
                    portfolio.instrumets.push({
                        instrumentId: item.instrumentId,
                        symbolFull: this.instrumentsService.getById(item.instrumentId)?.symbolFull,
                        percentage: item.percentage
                    });
                } else if (item.cid) {
                    portfolio.copiedInvestors.push({
                        cid: item.cid,
                        username: usersCidMap.get(item.cid)?.UserName,
                        percentage: item.percentage
                    });
                }
            }
        });

        return portfolio;
    }

    private async getUserPortfolio(username: string): Promise<PublicPortfolioItemData[]> {
        const params = {
            pageSize: 100
        }

        return await this.httpService.get<PublicPortfolioData>(`/sapi/userstats/portfolio/username/${username}/live`, { params }).then((data) => {
            return data?.items || [];
        })
    }
}
