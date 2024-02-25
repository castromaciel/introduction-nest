import { Car } from 'src/cars/interfaces/Car.interfaces';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
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
    model: 'Cherokee',
  },
];
