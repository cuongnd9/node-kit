import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Cat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  image: string;
}

export default Cat;
