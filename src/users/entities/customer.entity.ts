import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Exclude } from '@nestjs/class-transformer';

import { Order } from './order.entity';
import { Account } from './account.entity';

@Entity({ name: 'customers' })
export class Customer {
  @PrimaryGeneratedColumn()
  identifier: number;

  @Column({
    type: 'varchar',
    length: 25,
  })
  name: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 25,
  })
  lastName: string;

  @Exclude()
  @Column({
    type: 'varchar',
    length: 15,
  })
  phone: string;

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

  @OneToOne(() => Account, (account) => account.customer, { nullable: true })
  account: Account;

  @OneToMany(() => Order, (order) => order.customer)
  order: Order[];
}
