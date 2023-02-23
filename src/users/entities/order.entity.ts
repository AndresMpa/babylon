import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Exclude, Expose } from '@nestjs/class-transformer';

import { Customer } from './customer.entity';
import { OrderItem } from './orderItem.entity';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  identifier: number;

  @Exclude()
  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @Exclude()
  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @ManyToOne(() => Customer, (customer) => customer.order)
  @JoinColumn({ name: 'customer_identifier' })
  customer: Customer;

  @Exclude()
  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[];

  @Expose()
  get products() {
    if (this.items) {
      return this.items
        .filter((entries) => !!entries)
        .map((item) => ({
          ...item.product,
          quantity: item.quantity,
          itemIdentifier: item.identifier,
        }));
    }
    return [];
  }

  @Expose()
  get total() {
    if (this.items) {
      return this.items
        .filter((entries) => !!entries)
        .reduce((total, item) => {
          return total + item.product.price * item.quantity;
        }, 0);
    }
    return 0;
  }
}
