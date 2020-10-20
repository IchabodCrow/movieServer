import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Genres } from "./Genres";


@Entity()
export class Filter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  year: string;

  @Column({nullable: true})
  rating: string;

  @ManyToMany( type => Genres)
  @JoinTable()
  genre: Genres[];

  @Column({nullable: true})
  userId: number;

}