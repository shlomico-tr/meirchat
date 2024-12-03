import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult, HealthCheckError } from '@nestjs/terminus';
import { InstrumentsService } from './instruments.service';



@Injectable()
export class InstrumentsHealthIndicator extends HealthIndicator {

    constructor(private readonly instrumentsService: InstrumentsService) {
        super();
    }

    async isHealthy(): Promise<HealthIndicatorResult> {
        const instrument = await this.instrumentsService.getBySymbol('AAPL');
        const isHealthy = !!instrument && instrument.id > 0;
        const result = this.getStatus('instruments', isHealthy);

        if (isHealthy) {
            return result;
        }
        throw new HealthCheckError('Instruments service failed', result);
    }
}