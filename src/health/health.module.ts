import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { InstrumentsModule } from 'src/instruments/instrumets.module';

@Module({
    imports: [
        TerminusModule,
        InstrumentsModule
    ],
    controllers: [HealthController],
    providers: [],
})
export class HealthModule { }
