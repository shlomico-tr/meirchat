import { Test, TestingModule } from '@nestjs/testing';
import { InstrumetsController } from './instruments.controller';

describe('InstrumetsController', () => {
  let controller: InstrumetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstrumetsController],
    }).compile();

    controller = module.get<InstrumetsController>(InstrumetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
