import { ApiProperty } from "@nestjs/swagger";

export interface SearchQueryParams {
    startIndex: number;
    usersCount: number;
    instrumentsCount: number;
    prefix: string;
    ApplicationName: string;
    UserToken: string;
}

export class SearchAppPathItem {
    @ApiProperty({ type: 'string', description: 'Path' })
    path: string;

    @ApiProperty({ type: 'string', description: 'Description' })
    description: string;
}

export class SearchAppPath {
    @ApiProperty({ type: 'string', description: 'Description' })
    description: string;

    @ApiProperty({ type: SearchAppPathItem, isArray: true })
    paths: SearchAppPathItem[];
}

export class UserIndexResponse {
    @ApiProperty({ type: 'string', description: 'user id' })
    objectID: string;
    @ApiProperty({ type: 'string', description: 'user name' })
    userName: string;
    @ApiProperty({ type: 'string', description: 'user full name' })
    fullName: string;
    @ApiProperty({ type: 'string', description: 'user country' })
    country: string;
    accountType: number
    userRegion: string
    @ApiProperty({ type: 'number' })
    numOfCopiers: number
    pI_Tier: string
    clubTier: string
    allowDisplayFullName: number
    userLanguage: string
    @ApiProperty()
    isPI: number
    url: string
    avatars: string
}



export class InstrumentIndexResponse {
    @ApiProperty({ type: 'string', description: 'instrument id' })
    objectID: string
    @ApiProperty()
    instrumentType: string
    @ApiProperty()
    name: string
    @ApiProperty()
    ceo?: string
    @ApiProperty()
    buyCurrency: string
    @ApiProperty()
    sellCurrency: string
    @ApiProperty()
    instrumentDisplayName: string
    @ApiProperty()
    companyInfo: string
    @ApiProperty()
    exchange: string
    @ApiProperty()
    isinCode: string
    @ApiProperty()
    isinCountryCode: string
    @ApiProperty()
    symbol: string
    @ApiProperty()
    symbolFull: string
    @ApiProperty()
    platformSector?: string
    @ApiProperty()
    platformIndustry?: string
    @ApiProperty()
    countryCodeLong: string
    @ApiProperty()
    countryFull: string
    @ApiProperty()
    region: string
    @ApiProperty()
    mkTcap: number
    @ApiProperty()
    avg3Months: number
    @ApiProperty()
    adV_Last3Months: number
}

export class UsersCollection {
    @ApiProperty({ type: [UserIndexResponse] })
    userIndexResponse: UserIndexResponse[];
    queryId: string
}

export class InstrumentCollection {
    @ApiProperty({ type: [InstrumentIndexResponse] })
    instrumentIndexResponse: InstrumentIndexResponse[]
    queryId: string
}

export class SearchData {
    @ApiProperty()
    usersCollection: UsersCollection
    @ApiProperty()
    instrumentCollection: InstrumentCollection
}
