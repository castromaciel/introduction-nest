import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Peugeot',
      model: '307',
    },
    {
      id: 3,
      brand: 'Fiat',
      model: 'Uno',
    },
    {
      id: 4,
      brand: 'Jeep',
      model: 'Cheeroke',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException('The id requested does not exist');

    return car;
  }
}
