import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'customers'})
export class Customer {
  @PrimaryGeneratedColumn()
  identifier: number;

  @Column({
    type: 'varchar',
    length: 25
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 25
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 15,
  })
  phone: string;
}
