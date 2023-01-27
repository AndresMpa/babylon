import { Product } from 'src/stock/entities/product.entity';
import { Customer } from './customer.entity';

export class Order {
  date: Date;
  owner: Customer;
  products: Product[];
}
