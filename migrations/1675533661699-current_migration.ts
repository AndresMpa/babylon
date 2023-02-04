import { MigrationInterface, QueryRunner } from "typeorm";

export class currentMigration1675533661699 implements MigrationInterface {
    name = 'currentMigration1675533661699'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "accounts" ("identifier" SERIAL NOT NULL, "password" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "role" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_4ab221da872e3a22c20258f3c88" PRIMARY KEY ("identifier"))`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "createAt"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
    }

}
