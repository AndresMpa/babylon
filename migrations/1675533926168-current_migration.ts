import { MigrationInterface, QueryRunner } from "typeorm";

export class currentMigration1675533926168 implements MigrationInterface {
    name = 'currentMigration1675533926168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "brands" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "createAt"`);
    }

}
