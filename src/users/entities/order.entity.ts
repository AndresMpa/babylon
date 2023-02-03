import { Column, Entity } from 'typeorm';

import { Customer } from './customer.entity';
import { Product } from 'src/stock/entities/product.entity';

@Entity({ name: 'orders' })
export class Order {
  @Column({
    type: 'date',
  })
  date: Date;
  owner: Customer;
  products: Product[];
}
