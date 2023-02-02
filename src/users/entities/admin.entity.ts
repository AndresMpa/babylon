import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Admins' })
export class Admin {
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
