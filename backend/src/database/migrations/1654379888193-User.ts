import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class User1654379888193 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                },
                {
                    name: "first_name",
                    type: "varchar",
                },
                {
                    name: "last_name",
                    type: "varchar",
                },
                {
                    name: "username",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "password",
                    type: "varchar",
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
