import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}