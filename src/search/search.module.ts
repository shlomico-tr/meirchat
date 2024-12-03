import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { HttpProxyModule } from 'src/common/http-proxy.module';

@Module({
  imports: [
   HttpProxyModule
  ],
  providers: [SearchService],
  controllers: [SearchController]
})
export class SearchModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes();
  }
}
