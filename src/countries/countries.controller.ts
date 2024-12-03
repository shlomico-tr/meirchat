import { Controller, Get, Param, ParseArrayPipe, ParseIntPipe, Query } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Country } from './countries.interface';

@ApiTags('countries')
@Controller('countries')
export class CountriesController {

    constructor(
        private readonly countriesService: CountriesService
    ) {

    }

    @ApiOperation({ summary: 'Get countries including etoro country model id' })
    @ApiResponse({ status: 200, description: 'Return country', type: [Country] })
    @ApiQuery({ name: 'filter', required: true, description: 'countries ids or abbreviations with comma delimeter', type: 'string' })
    @Get('')
    async getAll(
        @Query('filter', new ParseArrayPipe({ items: String, separator: ',' })) filter: string[],
    ): Promise<Country[]> {
        if (filter?.length > 0) {
            return this.countriesService.find(filter);
        }

        return await this.countriesService.getAll();
    }

    @ApiOperation({ summary: 'Get country data by etoro internal country id' })
    @ApiResponse({ status: 200, description: 'return country model', type: Country })
    @ApiParam({ name: 'countryId', required: true, description: 'country id', type: 'number' })
    @Get(':countryId')
    async getById(
        @Param('countryId', new ParseIntPipe()) countryId: number
    ): Promise<Country> {
        return await this.countriesService.getCountryById(countryId);
    }

    @ApiOperation({ summary: 'Get instruemnt data by 2 char abbreviation' })
    @ApiResponse({ status: 200, description: 'Return country', type: Country })
    @ApiParam({ 
        name: 'abbreviation', 
        required: true, 
        description: 'country ISO code as described in the 3166 international standard', 
        type: 'string', 
        examples: {
            'United States': {
                value: 'US'
            },
            'United Kingdom': {
                value: 'GB'
            }
        }
    })
    @Get(':abbreviation/abbreviation')
    async getByAbbreviation(
        @Param('abbreviation') abbreviation: string
    ): Promise<Country> {
        return await this.countriesService.getCountryByAbbreviation(abbreviation);
    }
}
