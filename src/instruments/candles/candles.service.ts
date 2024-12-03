import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom, map, retry } from 'rxjs';
import { InstrumentsService } from '../instruments.service';
import { CandlesData } from './candles.interface';
import { HttpProxyService } from 'src/common/http-proxy.service';

@Injectable()
export class CandlesService {

    constructor(
        private readonly httpService: HttpProxyService,
        private readonly configService: ConfigService,
        private readonly instrumentsService: InstrumentsService
    ) {
    }

    public async getCandles(symbol: string, period: string, candlesNumber: number): Promise<CandlesData> {
        const instrumentId = (await this.instrumentsService.getBySymbol(symbol))?.id;
        if (!instrumentId) {
            throw 'Instrument not found!';
        }
        
        return await this.getCandlesByInstrumentId(instrumentId, period, candlesNumber);
    }

    private async getCandlesByInstrumentId(instrumentId: number, period: string, candlesNumber: number): Promise<any> {
        return await this.httpService.get<CandlesData>(`/sapi/candles/candles/desc.json/${period}/${candlesNumber}/${instrumentId}`);
    }
}
