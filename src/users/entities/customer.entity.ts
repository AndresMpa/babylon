import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
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
    type: 'varchar',
    length: 25,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 15,
  })
  phone: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @OneToOne(() => Account, (account) => account.customer, { nullable: true })
  account: Account;
}
