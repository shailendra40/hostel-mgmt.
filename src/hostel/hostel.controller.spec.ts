import { Test, TestingModule } from '@nestjs/testing';
import { HostelController } from './hostel.controller';

describe('HostelController', () => {
  let controller: HostelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HostelController],
    }).compile();

    controller = module.get<HostelController>(HostelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
