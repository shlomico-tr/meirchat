import { Injectable } from '@nestjs/common';
import { RankingsPeriod } from 'src/discovery/people/people.interface';
import { PeopleService } from 'src/discovery/people/people.service';
import { PortfolioService } from 'src/discovery/people/portfolio/portfolio.service';
import { InstrumentInfoFilters, InstrumentsInfoService } from 'src/instruments/instruments-info/instruments-info.service';
import { InstrumentsService } from 'src/instruments/instruments.service';

@Injectable()
export class PortfolioDigestService {
    constructor(
        private readonly instrumentsService: InstrumentsService,
        private readonly instrumentsInfoService: InstrumentsInfoService,
        private readonly portfolioService: PortfolioService,
        private readonly peopleService: PeopleService
    ) {

    }

    async getPortfolioDigest(username: string, additionalInsights: boolean = true, relatedNews: boolean = true, top: number = 3): Promise<any> {
        // get user portfolio
        const portfolio = await this.portfolioService.getByUserName(username);
        const topInstruments = portfolio.instrumets.sort(i => i.percentage).slice(0, top);
        const symbols = topInstruments.map((item) => item.symbolFull);
        const instrumentsIds = topInstruments.map((item) => item.instrumentId);

        const topCopiedCids = portfolio.copiedInvestors.sort(i => i.percentage).slice(0, top).map((item) => item.cid);
        const rankingsPromise = this.peopleService.getByUsersIds(topCopiedCids, RankingsPeriod.CurrMonth);

        //Get the latest prices for the top assets in the portfolio:
        const instrumentPromise = this.instrumentsService.getBySymbols(symbols, { includeRate: false, includeClosingPrice: true });

        // get top news for each instrument
        const newsPromise = relatedNews ? this.instrumentsInfoService.getNews(symbols) : Promise.resolve(null);

        // get analysis sentiment for each instrument
        const infoPromise = additionalInsights ? this.instrumentsInfoService.getInstrumentInfoWithFilter(null, InstrumentInfoFilters.CustomFields, [
            'holdingPct', 'buyHoldingPct', 'sellHoldingPct', 'dailyPriceChange', 'dividendYieldDaily',
            'tipRanksFourStarsRecommendation', 'tipRanksFourStarsRecommendationArticleUrl', 'tipRanksFourStarsRecommendationDate',
            'traders7DayChange', 'tipRanksFourStarsConsensus', 'tipRanksFourStarsHighPriceTarget', 'tipRanksFourStarsLowPriceTarget'
        ], {
            instrumentIds: instrumentsIds.join(',')
        }) : Promise.resolve(null);

        //https://www.etoro.com/sapi/instrumentsinfo/instruments?internalInstrumentId=1001,1002&fields=


        const [topCopied, news, instruments, info] = await Promise.all([rankingsPromise, newsPromise, instrumentPromise, infoPromise]);
        const portfolioDigest = {
            portfolio,
            portolioRelatedNews: news,
            topCopiedMatrixCurrentMonth: topCopied,
            instruments,
            additionalInsights: info,
            description: 'generate comprehensive eToro Digest by combining the portfolio overview, market news, and daily changes for each asset.'
        }


        return portfolioDigest;
    }





}
