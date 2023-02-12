import { MigrationInterface, QueryRunner } from "typeorm";

export class currentMigration1676174919846 implements MigrationInterface {
    name = 'currentMigration1676174919846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "brandIdentifier" integer`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_410896a1ceab29cd5a5e15cb21b" FOREIGN KEY ("brandIdentifier") REFERENCES "brands"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_410896a1ceab29cd5a5e15cb21b"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "brandIdentifier"`);
    }

}
