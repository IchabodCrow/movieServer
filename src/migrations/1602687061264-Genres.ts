import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey} from "typeorm";

export class User1602685245911 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "genres",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                }, 
                {
                    name: "genre",
                    type: "varchar"
                }
                
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("genres");
    }
}
