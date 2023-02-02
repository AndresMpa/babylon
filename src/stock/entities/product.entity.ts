import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  identifier: number;

  @Column({
    unique: true,
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    type: 'text'
  })
  description: string;

  @Column({
    type: 'int'
  })
  price: number;

  @Column({
    type: 'int'
  })
  stock: number;

  @Column({
    type: 'varchar'
  })
  image: string;
}
