import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genres } from "./Genres";

@Entity()
export class Filtres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: string;

  @Column()
  rating: string;

  @OneToMany(type => Genres, genres => genres.genre, {
    cascade: true,
})
  @JoinColumn()
  genres: Genres;

  @Column()
  userId: number;
}