import { Controller, Get, Param, ParseArrayPipe, Query } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InstrumentInfoFilters, InstrumentsInfoService } from './instruments-info.service';
import { IndtrumentInfoESGRO, InstrumentInfoAnalystsForcastRQ, InstrumentInfoEarningsReportRO, InstrumentInfoOverviewRO, InstrumentInfoPopularMarketsRO, InstrumentsInfoNewsRO } from './instruments-info.interface';

import { StocksSearchItemRO, StocksSearchMetaData, StocksSearchParams, StocksPresets } from './stocks/stocks.intrerfaces';
import { InstrumentInfoRO } from 'src/instruments/instruments-info/instruments-info.interface';
import { StocksService } from './stocks/stocks.service';

@ApiTags('instruments')
@Controller('instruments')
export class InstrumentsInfoController {

    constructor(
        private readonly stocksService: StocksService,
        private readonly instrumetsInfoService: InstrumentsInfoService
    ) { }


    // @ApiOperation({
    //     summary: 'search for instruments',
    //     description: `Retrieve financial instruments using various filters including average daily volume, market capitalization, beta, price earnings ratio, and more. Filter by attributes like dividend status, sector, and market cap classification. Ideal for in-depth financial analysis and investment strategies`
    // })
    // @ApiQuery({
    //     name: 'sort',
    //     required: false,
    //     type: 'string',
    //     description: 'sort by fields, using "-" for desc and "," for multiple fields',
    // })
    // @ApiResponse({ status: 200, description: 'Return instrument info', type: [InstrumentsInfoSearchItemRO] })
    // @Get('/info/search')
    // async search(
    //     @Query() queryParams: InstrumentsInfoSearchParams,
    //     @Query() sort: string,
    // ): Promise<InstrumentsInfoSearchItemRO[]> {
    //     return await this.instrumetsInfoService.search(queryParams, sort);
    // }



    @ApiOperation({
        description: `Search stocks using various filters including sectors, daily volume, market cap, beta, price earnings ratio, dividend status, and market cap classification.`
    })
    @ApiResponse({ status: 200, description: 'Return instrument info', type: [StocksSearchItemRO] })
    @Get('stocks/search')
    async search(
        @Query() queryParams: StocksSearchParams
    ): Promise<StocksSearchItemRO[]> {
        return await this.stocksService.search(queryParams);
    }

    @ApiOperation({
        summary: 'search metadata contains exchanges ids and stocks sectors ids for the search filters',
        description: `get search metadata for exchanges and sectors, used for filtering stocks search. and return the lists with their ids and names.`
    })
    @Get('/search/metadata')
    @ApiResponse({ status: 200, description: 'Return markets info', type: StocksSearchMetaData })
    async getSearchMetadata(): Promise<StocksSearchMetaData> {
        return await this.stocksService.getSearchMetadata();
    }

    @ApiOperation({
        summary: 'instrument overview',
        description: `essential financial and market data for a company, including industry identification, business description, sales/revenue, liquidity ratios, CEO information, cash flow metrics, debt ratios, PE ratio, revenue per share, sector, market capitalization, beta, and investor relations URL.`
    })
    @ApiResponse({ status: 200, description: 'Return overfiew', type: InstrumentInfoOverviewRO })
    @ApiNotFoundResponse({ description: 'Instrument not found' })
    @ApiParam({ name: 'symbol', required: true, description: 'instrument symbol', type: 'string' })
    @Get('/:symbol/info/overview')
    async getOverview(
        @Param('symbol') symbol: string
    ): Promise<InstrumentInfoOverviewRO> {

        return await this.instrumetsInfoService.getOverviewBySymbol(symbol).then((res) => {
            delete res['longBusinessDescription'];
            res.marketPageUrl = `https://www.etoro.com/markets/${symbol.toLowerCase()}`;
            return res;
        });
    }

    @ApiOperation({
        summary: 'analyst ratings, recommendations, ranks, price targets, success rates, consensus, and total analysts',
        description: `analyst ratings, recommendations, ranks, price targets, success rates, consensus, and total analysts`
    })
    @ApiResponse({ status: 200, description: 'Return instrument', type: InstrumentInfoAnalystsForcastRQ })
    @ApiNotFoundResponse({ description: 'Instrument not found' })
    @ApiParam({ name: 'symbol', required: true, description: 'instrument symbol', type: 'string' })
    @Get('/:symbol/info/analysts-forcast')
    async getAnalystsForcast(
        @Param('symbol') symbol: string
    ): Promise<InstrumentInfoAnalystsForcastRQ> {

        return await this.instrumetsInfoService.getAnalystsForcast(symbol);
    }

    @ApiOperation({
        summary: ' ESG (Environmental, Social, and Governance) ESG scores and more info',
        description: `ESG (Environmental, Social, and Governance) ESG scores `
    })
    @ApiResponse({ status: 200, description: 'Return instrument', type: IndtrumentInfoESGRO })
    @ApiNotFoundResponse({ description: 'Instrument not found' })
    @ApiParam({ name: 'symbol', required: true, description: 'instrument symbol', type: 'string' })
    @Get('/:symbol/info/environmental-social-and-governance')
    async getEsg(
        @Param('symbol') symbol: string
    ): Promise<IndtrumentInfoESGRO> {

        return await this.instrumetsInfoService.getESG(symbol);
    }

    @ApiOperation({
        summary: 'latest news for instrument and news sentiment',
        description: `latest news for instrument and news sentiment`
    })
    @ApiResponse({ status: 200, description: 'list of latest news', type: InstrumentsInfoNewsRO })
    @ApiNotFoundResponse({ description: 'Instrument not found' })
    @ApiQuery({
        name: 'symbols',
        required: true,
        description: 'symbols of instruments',
        type: 'string',
        example: '?symbols=AAPL,GOOG',
    })
    @Get('/info/latest-markets-news')
    async getTopNews(
        @Query('symbols', new ParseArrayPipe({ items: String, separator: ',' })) symbols: string[],
    ): Promise<InstrumentsInfoNewsRO> {

        return await this.instrumetsInfoService.getNews(symbols);
    }


    // @ApiOperation({
    //     summary: 'top popular instruemnts by investors',
    //     description: `popular instruemnts by investors`
    // })
    // @ApiResponse({ status: 200, description: 'list of popular instruments', type: InstrumentInfoPopularMarketsRO })
    // @ApiNotFoundResponse({ description: 'Instrument not found' })
    // @Get('/info/popular-instruments')
    // async getPopularMarkets(

    // ): Promise<InstrumentInfoPopularMarketsRO> {

    //     return await this.instrumetsInfoService.getPopularInstruments();
    // }

    @ApiOperation({
        summary: 'top popular instruemnts by investors',
        description: `get list of instruments that are popular or trending on the eToro platform.`
    })
    @ApiResponse({ status: 200, description: 'a list of popular instruments', type: [InstrumentInfoRO] })
    @Get('/lists/popular-markets')
    async getPopularMarkets(): Promise<InstrumentInfoRO[]> {
        return await this.stocksService.getPresets(StocksPresets.PopularMarkets);
    }


    @ApiOperation({
        summary: 'here you can find new instruments that added lately to the eToro platform',
        description: `get list of new instruments that added lately to the eToro platform.`
    })
    @ApiResponse({ status: 200, description: 'Return markets info', type: [InstrumentInfoRO] })
    @Get('/lists/debutantes')
    async getDebutantes(): Promise<InstrumentInfoRO[]> {
        return await this.stocksService.getPresets(StocksPresets.Debutantes);
    }

    @ApiOperation({
        summary: 'list of instruments that are paying dividends',
        description: `get list of dividents stocks`
    })
    @ApiResponse({ status: 200, description: 'Return list of stocks', type: [InstrumentInfoRO] })
    @Get('/lists/dividends')
    async getDividents(): Promise<InstrumentInfoRO[]> {
        return await this.stocksService.getPresets(StocksPresets.Dividends);
    }

    // upcoming earnings reports
    @ApiOperation({
        summary: 'instruments earnings report overview',
        description: `earnings report includes information such as the company's name and industry, conference call details (date, time, and webcast link), currency used, quarterly EPS estimates, sales figures, replay availability, next earnings date and quarter, market capitalization, and fiscal year.`
    })
    @ApiQuery({ name: 'symbol', required: false, description: 'if user specify an instrument symbol', type: 'string' })
    @ApiResponse({ status: 200, description: 'Return list of instruments', type: [InstrumentInfoRO]  })
    @Get('/lists/upcoming-earnings-reports')
    async getUpcomingEarningsReports(
        @Query('symbol') symbol: string
    ): Promise<InstrumentInfoRO[]> {
        if(symbol) {
            return await this.instrumetsInfoService.getEarningsBySymbol(symbol) as unknown as [InstrumentInfoRO];
        }

        return await this.stocksService.getPresets(StocksPresets.UpcomingEarnings);
    }
}