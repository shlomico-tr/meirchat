import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { HttpProxyModule } from 'src/common/http-proxy.module';

@Module({
  imports:[
    HttpProxyModule
  ],
  controllers: [CountriesController],
  providers: [CountriesService]
})
export class CountriesModule  implements NestModule {

  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes(
        { path: 'countries', method: RequestMethod.GET },
        { path: 'countries/:countryId', method: RequestMethod.GET },
        { path: 'countries/:abbreviation/abbreviation', method: RequestMethod.GET },
      );
  }
}
