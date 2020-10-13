import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class FavoriteMovies {
  @PrimaryColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  user_id: number;
}