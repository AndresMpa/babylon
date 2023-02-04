import { MigrationInterface, QueryRunner } from "typeorm";

export class currentMigration1675535518682 implements MigrationInterface {
    name = 'currentMigration1675535518682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" ADD "customerIdentifier" integer`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "UQ_ecbb9b30557b1fe7ef62774c187" UNIQUE ("customerIdentifier")`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_ecbb9b30557b1fe7ef62774c187" FOREIGN KEY ("customerIdentifier") REFERENCES "customers"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_ecbb9b30557b1fe7ef62774c187"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "UQ_ecbb9b30557b1fe7ef62774c187"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "customerIdentifier"`);
    }

}
