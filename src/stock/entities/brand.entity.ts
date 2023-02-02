import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'brands'})
export class Brand {
  @PrimaryGeneratedColumn()
  identifier: number;

  @Column({
    type: 'varchar'
  })
  image: string;

  @Column({
    type: 'varchar',
    unique: true
  })
  name: string;
}
