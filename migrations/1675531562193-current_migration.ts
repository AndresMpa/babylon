import { MigrationInterface, QueryRunner } from "typeorm";

export class currentMigration1675531562193 implements MigrationInterface {
    name = 'currentMigration1675531562193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("identifier" SERIAL NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_11680b1390517ec44d686d57e51" PRIMARY KEY ("identifier"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
