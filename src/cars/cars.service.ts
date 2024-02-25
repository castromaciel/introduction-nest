import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/Car.interfaces';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Peugeot',
      model: '307',
    },
    {
      id: uuid(),
      brand: 'Fiat',
      model: 'Uno',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cheeroke',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException('The id requested does not exist');

    return car;
  }

  public delete(id: string) {
    const carDB = this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== id);

    return carDB;
  }

  public create(createCarDto: CreateCarDto) {
    const car: Car = {
      ...createCarDto,
      id: uuid(),
    };

    this.cars.push(car);

    return car;
  }

  public update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(`Card id is not valid`);
    }

    this.cars = this.cars.map((car) => {
      console.log(car.id === id);
      if (car.id === id) {
        carDb = {
          ...carDb,
          ...updateCarDto,
          id,
        };
        return carDb;
      }
      return car;
    });

    return carDb;
  }
}
