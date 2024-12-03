import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioDigestService } from './portfolio-digest.service';

describe('PortfolioDigestService', () => {
  let service: PortfolioDigestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioDigestService],
    }).compile();

    service = module.get<PortfolioDigestService>(PortfolioDigestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
