import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    createdAt: new Date().getTime(),
    name: 'Toyota',
  },
  {
    id: uuid(),
    createdAt: new Date().getTime(),
    name: 'Peugeot',
  },
  {
    id: uuid(),
    createdAt: new Date().getTime(),
    name: 'Fiat',
  },
  {
    id: uuid(),
    createdAt: new Date().getTime(),
    name: 'Jeep',
  },
];
