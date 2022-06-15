import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class createFKMusicsUsers1655118601759 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("musics",new TableForeignKey({
            columnNames:["autor"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("musics")
        await queryRunner.dropForeignKey("musics",table.foreignKeys[0])
    }

}
