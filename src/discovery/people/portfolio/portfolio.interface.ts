import { InstrumentRO } from "src/instruments/instruments.interface";
import { RankingsData } from "../people.interface";
import { ApiProperty } from "@nestjs/swagger";


export class PublicPorfolioCopiedInvestorsRO {
    @ApiProperty()
    cid: number;
    @ApiProperty()
    username: string;
    @ApiProperty()
    percentage: number;
    @ApiProperty()
    ranking?: RankingsData;
}

export class PublicPortfolioInstrumentsRO {
    @ApiProperty()
    instrumentId: number;
    @ApiProperty()
    symbolFull: string;
    @ApiProperty()
    percentage: number;
    @ApiProperty()
    instrument?: InstrumentRO;
}

export class PublicPorfolioRO {
    @ApiProperty({ type: [PublicPorfolioCopiedInvestorsRO] })
    copiedInvestors: PublicPorfolioCopiedInvestorsRO[];
    @ApiProperty({ type: [PublicPortfolioInstrumentsRO] })
    instrumets: PublicPortfolioInstrumentsRO[];
    @ApiProperty()
    availableCashPercentage: number;
    @ApiProperty()
    portfolioUrl?: string;
}

export class PublicPortfolioData {
    page: number
    pageSize: number
    totalItems: number
    items: PublicPortfolioItemData[]
}

export interface PublicPortfolioItemData {
    cid?: number
    percentage: number
    instrumentId?: number
    isCash?: boolean
}