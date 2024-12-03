import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { InstrumetsController } from './instruments.controller';
import { HttpModule } from '@nestjs/axios';
import { InstrumentsInfoService } from './instruments-info/instruments-info.service';
import { InstrumentsInfoController } from './instruments-info/instruments-info.controller';
import { InstrumentsHealthIndicator } from './instruments.health';
import { CandlesService } from './candles/candles.service';
import { HttpProxyModule } from 'src/common/http-proxy.module';
import { StocksService } from './instruments-info/stocks/stocks.service';

@Module({
  imports: [
    HttpProxyModule,
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5,
    }),
  ],
  providers: [
    InstrumentsHealthIndicator,
    InstrumentsService,
    InstrumentsInfoService,
    StocksService,
    CandlesService
  ],
  controllers: [
    InstrumetsController,
    InstrumentsInfoController
  ],
  exports: [
    InstrumentsService,
    InstrumentsInfoService,
    InstrumentsHealthIndicator
  ]
})
export class InstrumentsModule implements NestModule {

  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes(
      ); 
  }
}
