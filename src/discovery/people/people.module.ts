import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { HttpModule } from '@nestjs/axios';
import { PortfolioService } from './portfolio/portfolio.service';
import { InstrumentsModule } from 'src/instruments/instrumets.module';
import { HttpProxyModule } from 'src/common/http-proxy.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 15000,
      maxRedirects: 5,
    }),
    HttpProxyModule,
    InstrumentsModule
  ],
  controllers: [PeopleController],
  providers: [PeopleService, PortfolioService],
  exports: [
    PeopleService,
    PortfolioService
  ]
})
export class PeopleModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes();
  }
}
