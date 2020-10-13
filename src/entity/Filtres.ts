import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genres } from "./Genres";

@Entity()
export class Filtres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: string;

  @Column()
  rating: string;

  @OneToOne(type => Genres)
  @JoinColumn()
  genres: Genres;

  @Column()
  userId: number;

}