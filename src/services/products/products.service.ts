import { Injectable } from '@nestjs/common';

import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterIdentifier = 1;
  private products: Product[] = [
    {
      identifier: '1',
      name: 'Pijama del niño de rayas',
      description: 'Una pijama comoda, calientita y rayada',
      price: 10_000,
      image: '',
      stock: 1,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(index: string) {
    return this.products.find((item) => item.identifier === index);
  }

  create(payload: any) {
    this.counterIdentifier += 1;
    const newProduct = {
      identifier: this.counterIdentifier,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(identifier: string, payload: any) {
    const product = this.findOne(identifier);

    if (product) {
      const index = this.products.findIndex(
        (item) => item.identifier === identifier,
      );
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
  }
}
