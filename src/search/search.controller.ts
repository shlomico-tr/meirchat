import { Controller, Get, Query, Res } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { SearchAppPath, SearchData } from './search.interface';
import { SearchService } from './search.service';
import { Response } from 'express';
import * as fs from 'fs';

@ApiTags('Search')
@Controller('search')
export class SearchController {

    constructor(
        private readonly searchService: SearchService
    ) { }

    @Get('app-paths')
    @ApiOperation({
        summary: 'query to find main eToro app urls to help users navigate to the right page',
        description: 'query to find main eToro app urls to help users navigate to the right page',
    })
    @ApiOkResponse({ description: 'OK', type: SearchAppPath })
    etoroAppPaths(@Res() res: Response): void {
        const filePath = `${process.cwd()}/static-assets/etoro-app-map.json`;

        // Read the JSON file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            // Parse the JSON data
            let jsonData;
            try {
                jsonData = JSON.parse(data);
            } catch (e) {
                res.status(500).json({ error: 'Failed to parse JSON' });
                return;
            }

            // Send the JSON response
            res.json(jsonData as SearchAppPath);
        });
    }

    @Get('entities')
    @ApiOperation({
        summary: `find user's username using their full name query and instruments using their full name`,
        description: 'find users to extract their usernames, gcid and cid',
    })
    @ApiQuery({ name: 'query', required: true, description: 'search query', type: 'string' })
    @ApiOkResponse({ description: 'OK', type: SearchData })
    async search(
        @Query('query') query: string,
    ): Promise<SearchData> {
        return await this.searchService.search(query);
    }


}