import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Filter } from "./Filter";

@Entity()
export class Genres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  genreId: number

  @Column({nullable: true})
  name: string

  @Column({nullable: true})
  filterId: number

  @ManyToMany( type => Filter, filter => filter.genre)
  genre: Filter[]
}