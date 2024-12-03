import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ScheduleModule } from '@nestjs/schedule';
import { join } from 'path';
import { InstrumentsModule } from './instruments/instrumets.module';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';
import { CountriesModule } from './countries/countries.module';
import { DiscoveryModule } from './discovery/discovery.module';
import { SearchModule } from './search/search.module';
import { FeaturesModule } from './features/features.module';
import configuration from './config/configuration';
import { HttpProxyModule } from './common/http-proxy.module';
import { LoggerMiddleware } from './common/http-logger.interceptor';
@Module({
  imports: [
    HealthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static-assets'),
    }),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    CountriesModule,
    DiscoveryModule,
    SearchModule,
    InstrumentsModule,
    FeaturesModule,
    HttpProxyModule
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
