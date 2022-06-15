import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class createMusic1655118039125 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"musics",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    isNullable: false,
                },
                {
                    name: "cover",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "music",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "titulo",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "autor",
                    type: "varchar",
                    isNullable: false,
                }
            ]
        }))


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("musics")
    }

}
