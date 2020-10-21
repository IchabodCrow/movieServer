import {MigrationInterface, QueryRunner} from "typeorm";

export class table1603285038899 implements MigrationInterface {
    name = 'table1603285038899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorite_movies" ("id" SERIAL NOT NULL, "movieId" integer NOT NULL, "userId" integer, CONSTRAINT "PK_7766c007e2e95de1d7a48953cbd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "genres" ("id" SERIAL NOT NULL, "genreId" integer, "name" character varying, "filterId" integer, CONSTRAINT "PK_80ecd718f0f00dde5d77a9be842" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "filter" ("id" SERIAL NOT NULL, "year" character varying NOT NULL, "rating" character varying, "userId" integer, CONSTRAINT "PK_3c5d89c1607d52ce265c7348f70" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "filter_genre_genres" ("filterId" integer NOT NULL, "genresId" integer NOT NULL, CONSTRAINT "PK_00c9f307692a764db24cfa1d858" PRIMARY KEY ("filterId", "genresId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a5ee3c0eca7179db96fd57310a" ON "filter_genre_genres" ("filterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3bb9bca8a8405ec5b53468f238" ON "filter_genre_genres" ("genresId") `);
        await queryRunner.query(`ALTER TABLE "filter_genre_genres" ADD CONSTRAINT "FK_a5ee3c0eca7179db96fd57310a9" FOREIGN KEY ("filterId") REFERENCES "filter"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "filter_genre_genres" ADD CONSTRAINT "FK_3bb9bca8a8405ec5b53468f2382" FOREIGN KEY ("genresId") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "filter_genre_genres" DROP CONSTRAINT "FK_3bb9bca8a8405ec5b53468f2382"`);
        await queryRunner.query(`ALTER TABLE "filter_genre_genres" DROP CONSTRAINT "FK_a5ee3c0eca7179db96fd57310a9"`);
        await queryRunner.query(`DROP INDEX "IDX_3bb9bca8a8405ec5b53468f238"`);
        await queryRunner.query(`DROP INDEX "IDX_a5ee3c0eca7179db96fd57310a"`);
        await queryRunner.query(`DROP TABLE "filter_genre_genres"`);
        await queryRunner.query(`DROP TABLE "filter"`);
        await queryRunner.query(`DROP TABLE "genres"`);
        await queryRunner.query(`DROP TABLE "favorite_movies"`);
    }
}
