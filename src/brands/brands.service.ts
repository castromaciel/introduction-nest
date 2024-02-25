import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';

import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      createdAt: new Date().getTime(),
      name: 'Toyota',
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brandDB = this.brands.find((brand) => brand.id === id);

    if (!brandDB) throw new NotFoundException('Brand does not exist');

    return brandDB;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = {
          ...brandDB,
          ...updateBrandDto,
        };

        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: string) {
    const brandDB = this.findOne(id);

    this.brands = this.brands.filter((brand) => brand.id !== id);
    return `The brand ${brandDB.name} was deleted succesfully`;
  }
}
