import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genres } from "./Genres";


@Entity()
export class Filter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  year: string;

  @Column({nullable: true})
  rating: string;

  @OneToOne( type => Genres)
  @JoinColumn()
  genre: Genres[]

  @Column({nullable: true})
  userId: number;

}