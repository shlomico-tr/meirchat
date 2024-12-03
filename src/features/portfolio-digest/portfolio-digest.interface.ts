import { ApiProperty } from "@nestjs/swagger";
import { UsersRankings } from "src/discovery/people/people.interface";
import { PublicPorfolioRO } from "src/discovery/people/portfolio/portfolio.interface";
import { InstrumentsInfoNewsRO } from "src/instruments/instruments-info/instruments-info.interface";
import { InstrumentRO } from "src/instruments/instruments.interface";

export class PortfolioDigestRO {
    @ApiProperty({ type: PublicPorfolioRO } )
    portfolio: PublicPorfolioRO;
    @ApiProperty({ type: InstrumentsInfoNewsRO } )
    portolioRelatedNews: InstrumentsInfoNewsRO;
    @ApiProperty({ type: [UsersRankings] } )
    topCopiedMatrixCurrentMonth: UsersRankings[];
    @ApiProperty({ type: [InstrumentRO] } )
    instruments: InstrumentRO[]
    @ApiProperty({ type: InstrumentRO } )
    additionalInsights: any;
    @ApiProperty({ type: String } )
    description: string;
}
