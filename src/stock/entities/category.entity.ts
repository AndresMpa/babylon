import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  identifier: number;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  name: string;

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

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}
