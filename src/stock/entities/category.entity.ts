import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
