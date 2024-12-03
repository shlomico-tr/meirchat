import { ApiProperty } from '@nestjs/swagger';
import { RankingsPeriod } from '../people.interface';


export class InvestorSearchQueryParams {

    @ApiProperty({
        description: 'Sort field prefix "-" is for descending order',
        enum: [
            'gain',
            'dailygain',
            'thisweekgain',
            'copiers',
            'copytradespct',
            'copyinvestmentpct',
            'copiersgain',
            'trades',
            'winratio',
            'profitablemonthspct',
            'profitableweekspct',
            'velocity',
            'exposure',
            'highleveragepct',
            'mediumleveragepct',
            'lowleveragepct',
            'activeweeks',
            'instrumentpct',
            'riskscore',
            'lastactivity',
            'longpospct',
            'baselinecopiers',
            'maxdailyriskscore',
            '-gain',
            '-dailygain',
            '-thisweekgain',
            '-copiers',
            '-copytradespct',
            '-copyinvestmentpct',
            '-copiersgain',
            '-trades',
            '-winratio',
            '-profitablemonthspct',
            '-profitableweekspct',
            '-velocity',
            '-exposure',
            '-highleveragepct',
            '-mediumleveragepct',
            '-lowleveragepct',
            '-activeweeks',
            '-instrumentpct',
            '-riskscore',
            '-lastactivity',
            '-longpospct',
            '-baselinecopiers',
            '-maxdailyriskscore',

        ],
        required: false,
    })
    sort?: string;

    @ApiProperty({
        description: 'Number of items to return',
        type: 'integer',
        minimum: 1,
        maximum: 10,
        default: 3,
        required: false
    })
    pagesize?: number;

    @ApiProperty({
        description: 'The period to search for',
        enum: RankingsPeriod,
        required: true,
    })
    period: RankingsPeriod;

    blocked: boolean;
    istestaccount: boolean;
    hasavatar?: boolean;
    copyblock?: boolean;
    optin: boolean;

    @ApiProperty({
        description: 'Minimum AUM tier',
        type: 'integer',
        minimum: 1,
        maximum: 8,
        required: false,
    })
    aumtierv2min?: number;

    @ApiProperty({
        description: 'Maximum AUM tier',
        type: 'integer',
        minimum: 1,
        maximum: 8,
        required: false,
    })
    aumtierv2max?: number;

    @ApiProperty({
        description: 'Minimum daily drawdown (value should be multiplied by -1)',
        type: 'number',
        format: 'float',
        required: false,
    })
    dailyddmin?: number;

    @ApiProperty({
        description: 'Maximum daily drawdown (value should be multiplied by -1)',
        type: 'number',
        format: 'float',
        required: false,
    })
    dailyddmax?: number;

    @ApiProperty({
        description: 'Minimum weekly drawdown (value should be multiplied by -1)',
        type: 'number',
        format: 'float',
        required: false,
    })
    weeklyddmin?: number;

    @ApiProperty({
        description: 'Maximum weekly drawdown (value should be multiplied by -1)',
        type: 'number',
        format: 'float',
        required: false,
    })
    weeklyddmax?: number;


    @ApiProperty({
        description: 'Minimum gain',
        type: 'number',
        format: 'float',
        minimum: -100,
        maximum: 999999,
        required: false,
    })
    gainmin?: number;

    @ApiProperty({
        description: 'Maximum gain',
        type: 'number',
        format: 'float',
        minimum: -100,
        maximum: 999999,
        required: false,
    })
    gainmax?: number;

    @ApiProperty({
        description: 'Minimum daily gain',
        type: 'number',
        format: 'float',
        required: false,
    })
    dailygainmin?: number;

    @ApiProperty({
        description: 'Maximum daily gain',
        type: 'number',
        format: 'float',
        required: false,
    })
    dailygainmax?: number;

    @ApiProperty({
        description: 'Minimum gain this week',
        type: 'number',
        format: 'float',
        required: false,
    })
    thisweekgainmin?: number;

    @ApiProperty({
        description: 'Maximum gain this week',
        type: 'number',
        format: 'float',
        required: false,
    })
    thisweekgainmax?: number;

    @ApiProperty({
        description: 'Minimum number of copiers',
        type: 'integer',
        required: false,
    })
    copiersmin?: number;

    @ApiProperty({
        description: 'Maximum number of copiers',
        type: 'integer',
        required: false,
    })
    copiersmax?: number;

    @ApiProperty({
        description: 'Minimum number of copied trades',
        type: 'integer',
        required: false,
    })
    copiedtradesmin?: number;

    @ApiProperty({
        description: 'Maximum number of copied trades',
        type: 'integer',
        required: false,
    })
    copiedtradesmax?: number;

    @ApiProperty({
        description: 'Minimum percentage of copy trades',
        type: 'number',
        format: 'float',
        required: false,
    })
    copytradespctmin?: number;

    @ApiProperty({
        description: 'Maximum percentage of copy trades',
        type: 'number',
        format: 'float',
        required: false,
    })
    copytradespctmax?: number;

    @ApiProperty({
        description: 'Minimum percentage of copy investment',
        type: 'number',
        format: 'float',
        required: false,
    })
    copyinvestmentpctmin?: number;

    @ApiProperty({
        description: 'Maximum percentage of copy investment',
        type: 'number',
        format: 'float',
        required: false,
    })
    copyinvestmentpctmax?: number;

    @ApiProperty({
        description: 'Minimum gain of copiers',
        type: 'number',
        format: 'float',
        required: false,
    })
    copiersgainmin?: number;

    @ApiProperty({
        description: 'Maximum gain of copiers',
        type: 'number',
        format: 'float',
        required: false,
    })
    copiersgainmax?: number;

    @ApiProperty({
        description: 'Country id from the Country model',
        type: 'integer',
        required: false,
    })
    country?: number;

    @ApiProperty({
        description: 'Minimum number of trades',
        type: 'integer',
        required: false,
    })
    tradesmin?: number;

    @ApiProperty({
        description: 'Maximum number of trades',
        type: 'integer',
        required: false,
    })
    tradesmax?: number;

    @ApiProperty({
        description: 'Minimum win ratio',
        type: 'number',
        format: 'float',
        required: false,
    })
    winratiomin?: number;

    @ApiProperty({
        description: 'Maximum win ratio',
        type: 'number',
        format: 'float',
        required: false,
    })
    winratiomax?: number;

    @ApiProperty({
        description: 'Minimum percentage of profitable months',
        type: 'number',
        format: 'float',
        required: false,
    })
    profitablemonthspctmin?: number;

    @ApiProperty({
        description: 'Maximum percentage of profitable months',
        type: 'number',
        format: 'float',
        required: false,
    })
    profitablemonthspctmax?: number;

    @ApiProperty({
        description: 'Minimum percentage of profitable weeks',
        type: 'number',
        format: 'float',
        required: false,
    })
    profitableweekspctmin?: number;

    @ApiProperty({
        description: 'Maximum percentage of profitable weeks',
        type: 'number',
        format: 'float',
        required: false,
    })
    profitableweekspctmax?: number;

    @ApiProperty({
        description: 'Minimum velocity',
        type: 'number',
        format: 'float',
        required: false,
    })
    velocitymin?: number;

    @ApiProperty({
        description: 'Maximum velocity',
        type: 'number',
        format: 'float',
        required: false,
    })
    velocitymax?: number;

    @ApiProperty({
        description: 'Minimum exposure',
        type: 'number',
        format: 'float',
        required: false,
    })
    exposuremin?: number;

    @ApiProperty({
        description: 'Maximum exposure',
        type: 'number',
        format: 'float',
        required: false,
    })
    exposuremax?: number;

    @ApiProperty({
        description: 'Minimum high leverage percentage',
        type: 'number',
        format: 'float',
        required: false,
    })
    highleveragepctmin?: number;

    @ApiProperty({
        description: 'Maximum high leverage percentage',
        type: 'number',
        format: 'float',
        required: false,
    })
    highleveragepctmax?: number;

    @ApiProperty({
        description: 'Minimum medium leverage percentage',
        type: 'number',
        format: 'float',
        required: false,
    })
    mediumleveragepctmin?: number;

    @ApiProperty({
        description: 'Maximum medium leverage percentage',
        type: 'number',
        format: 'float',
        required: false,
    })
    mediumleveragepctmax?: number;

    @ApiProperty({
        description: 'Minimum low leverage percentage',
        type: 'number',
        format: 'float',
        required: false,
    })
    lowleveragepctmin?: number;

    @ApiProperty({
        description: 'Maximum low leverage percentage',
        type: 'number',
        format: 'float',
        required: false,
    })
    lowleveragepctmax?: number;

    @ApiProperty({
        description: 'Minimum active weeks',
        type: 'integer',
        required: false,
    })
    activeweeksmin?: number;

    @ApiProperty({
        description: 'Maximum active weeks',
        type: 'integer',
        required: false,
    })
    activeweeksmax?: number;

    @ApiProperty({
        description: 'Instrument ID for instrument. For asset types: Cryptocurrencies=-10, Currencies=-1, Commodities=-2, Indices=-4, Stocks=-5, and ETF=-6. For multiple values, use comma separator',
        type: 'integer',
        required: false,
    })
    instrumentid?: number;

    @ApiProperty({
        description: 'Minimum instrument percentage',
        type: 'number',
        format: 'float',
        maximum: 100,
        required: false,
    })
    instrumentpctmin?: number;

    @ApiProperty({
        description: 'Maximum instrument percentage',
        type: 'number',
        format: 'float',
        maximum: 100,
        required: false,
    })
    instrumentpctmax?: number;


    @ApiProperty({
        description: 'Minimum baseline copiers',
        type: 'integer',
        required: false,
    })
    baselinecopiersmin?: number;

    @ApiProperty({
        description: 'Maximum baseline copiers',
        type: 'integer',
        required: false,
    })
    baselinecopiersmax?: number;

    @ApiProperty({
        description: 'Risk score (1-7)',
        type: 'integer',
        minimum: 1,
        maximum: 7,
        required: false,
    })
    riskscore?: number;

    @ApiProperty({
        description: 'Maximum monthly risk score',
        type: 'integer',
        minimum: 1,
        maximum: 7,
        required: false,
    })
    maxmonthlyriskscore?: number;

    @ApiProperty({
        description: 'Whether the investor is verified',
        type: 'boolean',
        required: false,
    })
    verified?: boolean;

    @ApiProperty({
        description: 'Whether the investor is a popular investor',
        type: 'boolean',
        required: false,
    })
    popularinvestor?: boolean;

    @ApiProperty({
        description: 'Minimum risk score (1-7)',
        type: 'integer',
        minimum: 1,
        maximum: 7,
        required: false,
    })
    riskscoremin?: number;

    @ApiProperty({
        description: 'Maximum risk score',
        type: 'integer',
        minimum: 1,
        maximum: 10,
        required: false,
    })
    riskscoremax?: number;

    @ApiProperty({
        description: 'Minimum maximum daily risk score',
        type: 'integer',
        minimum: 1,
        maximum: 10,
        required: false,
    })
    maxdailyriskscoremin?: number;

    @ApiProperty({
        description: 'Maximum maximum daily risk score',
        type: 'integer',
        minimum: 1,
        maximum: 10,
        required: false,
    })
    maxdailyriskscoremax?: number;

    @ApiProperty({
        description: 'Minimum maximum monthly risk score',
        type: 'integer',
        minimum: 1,
        maximum: 10,
        required: false,
    })
    maxmonthlyriskscoremin?: number;

    @ApiProperty({
        description: 'Maximum maximum monthly risk score',
        type: 'integer',
        minimum: 1,
        maximum: 10,
        required: false,
    })
    maxmonthlyriskscoremax?: number;

    @ApiProperty({
        description: 'Minimum last activity percentage',
        type: 'number',
        format: 'float',
        required: false,
    })
    lastactivitymin?: number;

    @ApiProperty({
        description: 'Maximum last activity percentage',
        type: 'number',
        format: 'float',
        required: false,
    })
    lastactivitymax?: number;

    @ApiProperty({
        description: 'Top traded asset class ID',
        type: 'integer',
        required: false,
    })
    toptradedassetclassid?: number;

    @ApiProperty({
        description: 'Minimum long position percentage',
        type: 'number',
        format: 'float',
        required: false,
    })
    longpospctmin?: number;

    @ApiProperty({
        description: 'Maximum long position percentage',
        type: 'number',
        format: 'float',
        required: false,
    })
    longpospctmax?: number;

    @ApiProperty({
        description: 'Maximum first activity',
        type: 'integer',
        required: false,
    })
    firstactivitymax?: number;
}