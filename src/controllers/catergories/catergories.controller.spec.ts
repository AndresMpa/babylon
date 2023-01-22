import { Test, TestingModule } from '@nestjs/testing';
import { CatergoriesController } from './catergories.controller';

describe('CatergoriesController', () => {
  let controller: CatergoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatergoriesController],
    }).compile();

    controller = module.get<CatergoriesController>(CatergoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
