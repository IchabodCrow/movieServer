import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Genres } from "./Genres";


@Entity()
export class Filter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  year: string;

  @Column({ nullable: true })
  rating: string;

  @ManyToMany((type) => Genres, (genre) => genre.filter, { cascade: true })
  @JoinTable()
  genre: Genres[];

  @Column({ nullable: true })
  userId: number;
}