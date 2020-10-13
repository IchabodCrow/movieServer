import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Filtres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: string;

  @Column()
  rating: string;

  @Column()
  genres: string;

  @Column()
  user_id: string;

}