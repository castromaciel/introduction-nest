import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { CarsModule } from './cars.module';
import { CarsService } from './cars.service';

describe('CarsModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [CarsModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should provide CarsController', () => {
    const controller = module.get<CarsController>(CarsController);
    expect(controller).toBeDefined();
  });

  it('should provide CarsService', () => {
    const service = module.get<CarsService>(CarsService);
    expect(service).toBeDefined();
  });
});
