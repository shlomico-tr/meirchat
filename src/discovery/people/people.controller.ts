import { Controller, Get, Param, ParseArrayPipe, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PeopleService } from './people.service';
import { RankingsData, RankingsPeriod, RankingsSearch, UsersRankings } from './people.interface';
import { InvestorSearchQueryParams } from './rankinings/rankings-query-filters';

@ApiTags('discover/people')
@Controller('discover/people')
export class PeopleController {

    constructor(
        private readonly peopleService: PeopleService
    ) {

    }

    @ApiOperation({ summary: 'Search for investors using variaty of filters' })
    @ApiResponse({ status: 200, description: 'Return ranking', type: RankingsSearch })
    @Get('search')
    async search(
        @Query() queryParams: InvestorSearchQueryParams
    ): Promise<RankingsSearch> {
        return await this.peopleService.search(queryParams.period as RankingsPeriod, queryParams);
    }

    @ApiOperation({ summary: 'get multiple specific investors using their cids as userIds, the cid can be extract from the search method in search controller' })
    @ApiResponse({ status: 200, description: 'Return rankings', type: [UsersRankings] })
    @ApiQuery({ name: 'cids', required: true, description: 'users cids', type: 'string' })
    @ApiQuery({ name: 'period', required: true, description: 'period', enum: RankingsPeriod })
    @Get('multiple')
    async getBySymbols(
        @Query('cids', new ParseArrayPipe({ items: Number, separator: ',' })) cids: number[],
        @Query('period') period: RankingsPeriod
    ): Promise<UsersRankings[]> {
        return await this.peopleService.getByUsersIds(cids, period);
    }


    @ApiOperation({ summary: 'get specific investor using his cid as userId' })
    @ApiResponse({ status: 200, description: 'Return user dara', type: RankingsData })
    @ApiParam({ name: 'cid', required: true, description: 'user id', type: 'number' })
    @ApiQuery({ name: 'period', required: true, description: 'instrument symbol', enum: RankingsPeriod })
    @Get(':cid')
    async getBySymbol(
        @Param('cid') cid: number,
        @Query('period') period: RankingsPeriod
    ): Promise<RankingsData> {
        return await this.peopleService.getByUserId(cid, period);
    }
}
