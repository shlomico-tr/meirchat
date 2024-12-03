import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PeopleModule } from './people/people.module';
import { PeopleService } from './people/people.service';
import { HttpProxyModule } from 'src/common/http-proxy.module';


@Module({
  imports: [
    PeopleModule, 
    HttpProxyModule
  ],
  providers: [
    PeopleService
  ],
})
export class DiscoveryModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes();
  }
}
