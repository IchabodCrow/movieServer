import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class FavoriteMovies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  userId: number;
}