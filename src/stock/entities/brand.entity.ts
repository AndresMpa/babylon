import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'brands' })
export class Brand {
  @PrimaryGeneratedColumn()
  identifier: number;

  @Column({
    type: 'varchar',
  })
  image: string;

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
}
