import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  genre: string
}