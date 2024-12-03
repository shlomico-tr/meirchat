import { Controller, Get, Param, ParseArrayPipe, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InstrumentsService } from './instruments.service';
import { InstrumentRO } from './instruments.interface';
import { CandlesData, CandlesPeriod } from './candles/candles.interface';
import { CandlesService } from './candles/candles.service';

@ApiTags('instruments')
@Controller('instruments')
export class InstrumetsController {

    constructor(
        private readonly instrumetsService: InstrumentsService,
        private readonly candlesService: CandlesService
    ) { }

    @ApiOperation({ summary: 'get instruemnt data with option to include rate and the market closing prices' })
    @ApiResponse({ status: 200, description: 'Return instrument', type: InstrumentRO })
    @ApiParam({ name: 'symbol', required: true, description: 'instrument symbol', type: 'string' })
    @ApiQuery({ name: 'includeRate', required: false, description: 'include rate', type: 'boolean' })
    @ApiQuery({ name: 'includeClosingPrice', required: false, description: 'include closing price', type: 'boolean' })
    @Get(':symbol')
    async getBySymbol(
        @Param('symbol') symbol: string,
        @Query('includeRate') includeRate: boolean,
        @Query('includeClosingPrice') includeClosingPrice: boolean
    ): Promise<InstrumentRO> {
        return await this.instrumetsService.getBySymbol(symbol, { includeRate, includeClosingPrice });
    }

    // get multiple instruments by querystring array that holds symbols
    @ApiOperation({ summary: 'get multiple instruemnts data with option to include rate and the market closing prices' })
    @ApiResponse({ status: 200, description: 'Return instruments', type: [InstrumentRO] })
    @ApiQuery({ name: 'symbols', required: true, description: 'instrument symbols', type: 'string' })
    @ApiQuery({ name: 'includeRate', required: false, description: 'include rate', type: 'boolean' })
    @ApiQuery({ name: 'includeClosingPrice', required: false, description: 'include closing price', type: 'boolean' })
    @Get()
    async getBySymbols(
        @Query('symbols', new ParseArrayPipe({ items: String, separator: ',' })) symbols,
        @Query('includeRate') includeRate: boolean,
        @Query('includeClosingPrice') includeClosingPrice: boolean
    ): Promise<InstrumentRO[]> {
        return await this.instrumetsService.getBySymbols(symbols, { includeRate, includeClosingPrice });
    }


    @Get(':symbol/candles/:period/:candlesNumber')
    @ApiOperation({ description: 'get instruments prices using candles data including range low,high,open and close' })
    @ApiParam({ name: 'symbol', description: 'symbolfull of the instrument', type: 'string' })
    @ApiParam({ name: 'period', description: 'The time frame of the candles', enum: CandlesPeriod })
    @ApiParam({ name: 'candlesNumber', description: 'Amount of candles to return', type: 'number' })
    @ApiOkResponse({ description: 'OK', type: CandlesData })
    async getInstrumentsCandles(
        @Param('symbol') symbolFull: string,
        @Param('period') period: CandlesPeriod,
        @Param('candlesNumber') candlesNumber: number,
    ): Promise<CandlesData> {
        return await this.candlesService.getCandles(symbolFull, period, candlesNumber);
    }
}
