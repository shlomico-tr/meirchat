import { ApiProperty } from "@nestjs/swagger"

export class Country {
    @ApiProperty({ type: 'integer', description: 'etoro country ID' })
    countryId: number
    @ApiProperty({ type: 'string', description: 'country name' })
    name: string
    @ApiProperty({ type: 'string', description: 'country abbreviation', example: 'US' })
    abbreviation: string
}


export interface CountryData {
    countries: {
        countryId: number
        name: string
        abbreviation: string
        longAbbreviation: string
        phonePrefix: string
        isoCode: string
        riskGroupID: number
    }[]
}