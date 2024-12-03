import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PeopleModule } from 'src/discovery/people/people.module';
import { InstrumentsModule } from 'src/instruments/instrumets.module';
import { PortfolioDigestService } from './portfolio-digest/portfolio-digest.service';
import { PortfolioService } from 'src/discovery/people/portfolio/portfolio.service';
import { HttpModule } from '@nestjs/axios';
import { FeaturesController } from './features.controller';

@Module({
    imports: [
        HttpModule.register({
            timeout: 10000,
            maxRedirects: 5,
        }),
        PeopleModule,
        InstrumentsModule
    ],
    controllers: [FeaturesController],
    providers: [PortfolioDigestService],
    exports: [PortfolioDigestService]
})
export class FeaturesModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply()
            .forRoutes();
    }
}


