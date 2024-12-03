import { Controller, Get, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PortfolioDigestService } from './portfolio-digest/portfolio-digest.service';
import { PortfolioDigestRO } from './portfolio-digest/portfolio-digest.interface';

@ApiTags('features')
@Controller('features')
export class FeaturesController {
    constructor(
        private readonly portfolioDigest: PortfolioDigestService
    ) { }

    @ApiOperation({
        description: `Get user's eToro portfolio briefing and analysis, overview of your portfolio, market news, and asset changes. insights of user portfolio, market trends, and top copied investors. if user didn't provide his user name please ask him to provide it.`,
    })
    @ApiResponse({ status: 200, description: 'Return instrument', type: PortfolioDigestRO })
    @ApiNotFoundResponse({ description: 'User not found' })
    @ApiParam({ name: 'username', required: true, description: 'username of portfolio owner', type: 'string' })
    @ApiQuery({ name: 'top', required: false, description: 'top holdings to return, default is 3', type: 'number' })
    @ApiQuery({ name: 'relatedNews', required: false, description: 'add related news on top markets in portfolio. default true', type: 'boolean' })
    @ApiQuery({ name: 'additionalInsights', required: false, description: 'add related news on top markets in portfolio. default true', type: 'boolean' })
    @Get('/portfolio-digest/:username')
    async getAnalystsForcast(
        @Param('username') username: string,
        @Param('relatedNews') relatedNews: boolean = true,
        @Param('additionalInsights') additionalInsights: boolean = true,
        @Param('top') top: number = 3
    ): Promise<PortfolioDigestRO> {

        return await this.portfolioDigest.getPortfolioDigest(username, additionalInsights, relatedNews, top);
    }
}
