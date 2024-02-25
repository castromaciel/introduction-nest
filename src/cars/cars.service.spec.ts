import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

import { v4 as uuid } from 'uuid';

describe('CarsService', () => {
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsService],
    }).compile();

    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cars', () => {
      const result = service.findAll();
      expect(Array.isArray(result)).toBeTruthy();
    });
  });

  describe('findOneById', () => {
    it('should return a car by id', () => {
      const cars = service.findAll();
      const car = cars[0];
      const result = service.findOneById(car.id);
      expect(result).toEqual(car);
    });

    it('should throw NotFoundException if car id does not exist', () => {
      expect(() => service.findOneById('invalid-id')).toThrowError(
        NotFoundException,
      );
    });
  });

  describe('delete', () => {
    it('should delete a car by id', () => {
      const cars = service.findAll();
      const car = cars[0];
      const result = service.delete(car.id);
      expect(result).toEqual(car);
    });

    it('should throw NotFoundException if car id does not exist', () => {
      expect(() => service.delete('invalid-id')).toThrowError(
        NotFoundException,
      );
    });
  });

  describe('create', () => {
    it('should create a new car', () => {
      const createCarDto: CreateCarDto = {
        brand: 'Honda',
        model: 'Accord',
      };
      const result = service.create(createCarDto);
      expect(result).toHaveProperty('id');
      expect(result).toMatchObject(createCarDto);
    });
  });

  describe('update', () => {
    it('should update a car by id', () => {
      const cars = service.findAll();
      const car = cars[0];
      const updateCarDto: UpdateCarDto = {
        brand: 'Updated Brand',
        model: 'Updated Model',
      };
      const result = service.update(car.id, updateCarDto);
      expect(result).toEqual({ ...car, ...updateCarDto });
    });

    it('should throw BadRequestException if provided id in the update dto does not match', () => {
      const cars = service.findAll();
      const car = cars[0];
      const updateCarDto: UpdateCarDto = {
        id: uuid(),
        brand: 'Updated Brand',
        model: 'Updated Model',
      };
      expect(() => service.update(car.id, updateCarDto)).toThrowError(
        BadRequestException,
      );
    });

    it('should throw NotFoundException if car id does not exist', () => {
      expect(() =>
        service.update('invalid-id', {} as UpdateCarDto),
      ).toThrowError(NotFoundException);
    });
  });
});
