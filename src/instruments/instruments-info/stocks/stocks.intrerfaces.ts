import { ApiProperty } from "@nestjs/swagger";
import { InstrumentRO } from "src/instruments/instruments.interface";



export enum StockMarketCapClassifications {
    SmallCap = 'Small-cap',
    MidCap = 'Mid-cap',
    LargeCap = 'Large-cap',
    MegaCap = 'Mega-cap'
}


export class StocksSearch {
    page: number;
    pageSize: number;
    totalItems: number;
    items: StocksSearchItemRO[];
}

export class StocksSearchItemRO {
    @ApiProperty()
    monthlyPriceChange: number;
    @ApiProperty()
    "averageDailyVolumeLast3Months-TTM": number;
    @ApiProperty()
    "5YearAverageReturnOnInvestedCapital-TTM": number;
    @ApiProperty()
    "pegRatio-TTM": number;
    @ApiProperty()
    "5YearAveragePERatio-TTM": number;
    @ApiProperty()
    "longTermDebtToEquityRatio-TTM": number;
    @ApiProperty()
    "5YearAverageNetProfitMargin-TTM": number;
    @ApiProperty()
    "totalEnterpriseValue-Annual": number;
    @ApiProperty()
    "marketCapitalization-TTM": number;
    @ApiProperty()
    "priceToSalesFiscal-TTM": number;
    @ApiProperty()
    "priceToBook-TTM": number;
    @ApiProperty()
    "beta-TTM": number;
    @ApiProperty()
    instrumentId: number;
    @ApiProperty()
    displayName: string;
    @ApiProperty()
    instrument: InstrumentRO

}

export class StocksSearchParams {
    @ApiProperty({
        required: false,
        enum: [
            'internalclosingprice',
            'monthlypricechange',
            'weeklypricechange',
            'percentpricechange3months-annual',
            'percentpricechange52weeks-annual',
            'averagedailyvolumelast3months-ttm',
            'marketcapclassifications',
            'dividendYieldDaily-Annual',
            'beta-ttm',
            'peRatio-TTM',
            'totalenterprisevalue-annual',
            'EnterpriseValuetoSales',
            'enterpriseValuetoEBITDA',
            'EnterpriseValuetoOperCashflow',
            'pegratio-ttm',
            'longtermdebttoequityratio-ttm',
            'priceToSales-TTM',
            'pricetobook-ttm',

            '-internalclosingprice',
            '-monthlypricechange',
            '-weeklypricechange',
            '-percentpricechange3months-annual',
            '-percentpricechange52weeks-annual',
            '-averagedailyvolumelast3months-ttm',
            '-marketcapclassifications',
            '-dividendYieldDaily-Annual',
            '-beta-ttm',
            '-peRatio-TTM',
            '-totalenterprisevalue-annual',
            '-EnterpriseValuetoSales',
            '-enterpriseValuetoEBITDA',
            '-EnterpriseValuetoOperCashflow',
            '-pegratio-ttm',
            '-longtermdebttoequityratio-ttm',
            '-priceToSales-TTM',
            '-pricetobook-ttm'
        ],
        description: `sort by fields names. using "-" before field name for desc order. and "," for multiple fields.`,
       // examples: ['priceToBook-TTM,-beta-TTM', '-weeklypricechange']
    })
    'sort': string;

    @ApiProperty({
        required: false,
        description: `additional optional fields to return in the response. using "," for multiple fields.`,
        enum: [
            'internalclosingprice',
            'absdailypricechange',
            'monthlypricechange',
            'weeklypricechange',
            'oneyearpricechange',
            'percentpricechange3months-annual',
            'percentpricechange52weeks-annual',
            'averagedailyvolumelast3months-ttm',
            'marketcapclassifications',
            'marketcapitalization-ttm',
            'dividendYieldDaily-Annual',
            'beta-ttm',
            'peRatio-TTM',
            'totalenterprisevalue-annual',
            'EnterpriseValuetoSales',
            'enterpriseValuetoEBITDA',
            'EnterpriseValuetoOperCashflow',
            'pegratio-ttm',
            'longtermdebttoequityratio-ttm',
            'priceToSales-TTM',
            'priceToSalesFiscal-TTM',
            'pricetobook-ttm',
            'volumerateofchange10days',
            'volumerateofchange3months',
            '10daymovingaverage-annual',
            '50daymovingaverage-annual',
            'cryptomarketcap',
            '5YearAverageNetProfitMargin-TTM',
            '5YearAverageReturnOnInvestedCapital-TTM'
        ],
    })
    'additionalFields': string;


    @ApiProperty({
        required: false,
        type: 'number',
        description: `number of items to return. default value is 5`,
    })
    'top': number;

    @ApiProperty({
        description: 'filter by exchange id from search metadata separated by comma using the following format: 1,2,3',
        type: 'string',
        required: false
    })
    'internalexchangeid': string;

    @ApiProperty({
        description: 'filter by sector id from search metadata separated by comma using the following format: 1,2,3. The sectors includes: Technology Services, Electronic Technology, Consumer Durables, Retail Trade, Finance, Health Technology and more',
        type: 'string',
        required: false
    })
    'sectornameid': string;

    @ApiProperty({
        description: 'filter by min price at which the instrument is currently being traded. The price is in USD',
        type: 'number',
        required: false
    })
    'internalclosingpricemin': number;

    @ApiProperty({
        description: 'filter by max price at which the instrument is currently being traded. The price is in USD',
        type: 'number',
        required: false
    })
    'internalclosingpricemax': number;

    @ApiProperty({
        description: 'filter by 1 month max rate of change in price. in percentage',
        required: false
    })
    'monthlypricechangemax': number;

    @ApiProperty({
        description: 'filter by 1 month min rate of change in price. in percentage',
        required: false
    })
    'monthlypricechangemin': number;

    @ApiProperty({
        description: 'filter by min weekly rate change in price. in percentage',
        required: false
    })
    'weeklypricechangemin': number;

    @ApiProperty({
        description: 'filter by max weekly rate change in price. in percentage',
        required: false
    })
    'weeklypricechangemax': number;

    @ApiProperty({
        description: 'filter by 3 months min rate of change in price. in percentage',
        type: 'number',
        required: false
    })
    'percentpricechange3months-annualmin': number;

    @ApiProperty({
        description: 'filter by 3 months max rate of change in instrument price. in percentage',
        required: false
    })
    'percentpricechange3months-annualmax': number;

    @ApiProperty({
        description: 'filter by 1 year min rate of change in instrument price',
        required: false
    })
    'percentpricechange52weeks-annualmin': number;

    @ApiProperty({
        description: 'filter by 1 year max rate of change in instrument price',
        required: false
    })
    'percentpricechange52weeks-annualmax': number;

    @ApiProperty({
        description: 'filter by the min average number of shares traded of a given instrument in the past 3 months. the value in usd',
        required: false
    })
    'averagedailyvolumelast3months-ttmmin': number;

    @ApiProperty({
        description: 'filter by the max average number of shares traded of a given instrument in the past 3 months. the value in usd',
        required: false
    })
    'averagedailyvolumelast3months-ttmmax': number;

    @ApiProperty({
        description: `The total market value of a company's outstanding shares of stock. can use the following values: Small-cap, Mid-cap, Large-cap, Mega-cap. `,
        required: false,
        type: 'string',
        example: 'Small-cap,Mid-cap'
    })
    'marketcapclassifications': string;

    @ApiProperty({
        description: 'filter by min divedend yield How much a company pays out in dividends each year relative to its stock price.',
        required: false
    })
    'dividendYieldDaily-AnnualMin': number;

    @ApiProperty({
        description: 'filter by max divedend yield How much How much a company pays out in dividends each year relative to its stock price.',
        required: false
    })
    'dividendYieldDaily-AnnualMax': number;


    @ApiProperty({
        description: 'filter by min beta - A measure of risk/volatility of an instrument compared to its market as a whole.',
        required: false
    })
    'beta-ttmmin': number;

    @ApiProperty({
        description: 'filter by max beta - A measure of risk/volatility of an instrument compared to its market as a whole.',
        required: false
    })
    'beta-ttmmax': number;

    @ApiProperty({
        description: `filter by min pe-ration, A representation of a company's current share price relative to its earnings per share.`,
        required: false
    })
    'peRatio-TTMMin': number;

    @ApiProperty({
        description: `filter by max pe-ration, A representation of a company's current share price relative to its earnings per share.`,
        required: false
    })
    'peRatio-TTMMax': number;


    @ApiProperty({
        description: `filter by Enterprise min value. A measure of a company's total value, including its debts & cash equivalents. in USD`,
        required: false
    })
    'totalenterprisevalue-annualmin': number;

    @ApiProperty({
        description: `filter by Enterprise max value. A measure of a company's total value, including its debts & cash equivalents. in USD`,
        required: false
    })
    'totalenterprisevalue-annualmax': number;


    @ApiProperty({
        description: `filter by min EV/Sales. a number beween 1 to 2.9`,
        required: false
    })
    'EnterpriseValuetoSalesMin': number;

    @ApiProperty({
        description: `filter by max EV/Sales. a number beween 1 to 2.9`,
        required: false
    })
    'EnterpriseValuetoSalesMax': number;

    @ApiProperty({
        description: `filter by max EV/EBITDA A measure of a company's total value, comparing its enterprise value to earnings before interest, taxes, depreciation, and amortization. number between 0 to 20`,
        required: false
    })
    'enterpriseValuetoEBITDAMax': number;

    @ApiProperty({
        description: `filter by min EV/EBITDA A measure of a company's total value, comparing its enterprise value to earnings before interest, taxes, depreciation, and amortization. number between 0 to 20`,
        required: false
    })
    'enterpriseValuetoEBITDAMin': number;

    @ApiProperty({
        description: `filter by min EV/CFO  A ratio of a cash flow in comparison with its enterprise value. number between 0 to 100 USD`,
        required: false
    })
    EnterpriseValuetoOperCashflowMin: number;

    @ApiProperty({
        description: `filter by max EV/CFO  A ratio of a cash flow in comparison with its enterprise value. number between 0 to 100 USD`,
        required: false
    })
    EnterpriseValuetoOperCashflowMax: number;

    @ApiProperty({
        description: `filter by min P/E/G Ratio. number between 1 to 3`,
        required: false
    })
    'pegratio-ttmmin': number;

    @ApiProperty({
        description: `filter by max P/E/G Ratio. number between 1 to 3`,
        required: false
    })
    'pegratio-ttmmax': number;


    @ApiProperty({
        description: 'filter by min  LT Debt/Equity. value between 1 to 3',
        required: false
    })
    'longtermdebttoequityratio-ttmmin': number;

    @ApiProperty({
        description: 'filter by max  LT Debt/Equity. value between 1 to 3',
        required: false
    })
    'longtermdebttoequityratio-ttmmax': number;

    @ApiProperty({
        description: 'filter by min Price to Sales (TTM).  A ratio that compares a company’s stock price to its revenues. values: 1 to 3',
        required: false
    })
    'priceToSales-TTMMax': number;

    @ApiProperty({
        description: 'filter by max Price to Sales (TTM).  A ratio that compares a company’s stock price to its revenues. values: 1 to 3',
        required: false
    })
    'priceToSales-TTMMin': number;


    @ApiProperty({
        description: `filter by min price to book.  A ratio that measures the market's valuation of a company relative to its book value. values: 1 to 3`,
        required: false
    })
    'pricetobook-ttmmin': number;

    @ApiProperty({
        description: `filter by max price to book.  A ratio that measures the market's valuation of a company relative to its book value. values: 1 to 3`,
        required: false
    })
    'pricetobook-ttmmax': number;

    /*
    
            
    
        'sectorname-ttm': StockSectors;
    
    
    
        // this section params does not belongs to any filter used only for query to the api
        
       
        'isdelisted': number;
        @ApiProperty({
            required: false
        })
        'tipranksfourstarsconsensus': number;
    
        @ApiProperty({
            required: false
        })
        'tipranksconsensus': number;
    
        @ApiProperty({
            required: false
        })
        'tiprankstotalanalystsmin': number;
    
       
    
        @ApiProperty({
            required: false
        })
        'oneyearpricechangemin': number;
    
        @ApiProperty({
            required: false
        })
        'oneyearpricechangemax': number;
    
       
    
        @ApiProperty({
            required: false
        })
        'daystilldividendxdatemin': number;
    
        @ApiProperty({
            description: 'dividend status: p - paid, x - not paid, s - suspended',
            required: false
        })
        'dividendstatus': 'p' | 'x' | 's';
        */
}

export class StocksSearchMetaData {
    stockExchanges: {
        id: number;
        name: string;
        frequency: number;
    }[];
    stockSubCategories: {
        id: StockSectors;
        title: string;
        type: string;
        order: number;
    }[];
}



export enum StockSectors {
    TechnologyServices = 150,
    ElectronicTechnology = 137,
    ConsumerDurables = 152,
    RetailTrade = 140,
    Finance = 141,
    HealthTechnology = 139,
    ConsumerNonDurables = 144,
    ConsumerServices = 151,
    ProducerManufacturing = 138,
    CommercialServices = 146,
    EnergyMinerals = 142,
    ProcessIndustries = 154,
    Transportation = 158,
    NonEnergyMinerals = 149,
    Utilities = 148,
    Communications = 153,
    HealthServices = 145,
    IndustrialServices = 147,
    DistributionServices = 155,
    Miscellaneous = 156
}

export enum StocksPresets {
    Debutantes = 'debutantes',
    Dividends = 'dividends',
    PopularMarkets = 'popularMarkets',
    UpcomingEarnings = 'upcomingEarnings',
}
