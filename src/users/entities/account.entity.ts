import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'account' })
export class Account {
  @PrimaryGeneratedColumn()
  identifier: number;

  @Column({
    type: 'varchar',
  })
  password: string;

  @Column({
    type: 'varchar',
  })
  email: string;

  @Column({
    type: 'varchar',
  })
  role: string;
}
