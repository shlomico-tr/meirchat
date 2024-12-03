import { Test, TestingModule } from '@nestjs/testing';
import { InstrumentsInfoService } from './instruments-info.service';

describe('InstrumetsService', () => {
  let service: InstrumentsInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstrumentsInfoService],
    }).compile();

    service = module.get<InstrumentsInfoService>(InstrumentsInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
