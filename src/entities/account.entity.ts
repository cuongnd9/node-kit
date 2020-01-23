import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;
}

export default Account;
