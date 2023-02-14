import { MigrationInterface, QueryRunner } from "typeorm";

export class currentMigration1676386887544 implements MigrationInterface {
    name = 'currentMigration1676386887544'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products_categories_categories" ("productsIdentifier" integer NOT NULL, "categoriesIdentifier" integer NOT NULL, CONSTRAINT "PK_6996b76b3017030dd3aa41a99d0" PRIMARY KEY ("productsIdentifier", "categoriesIdentifier"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0413eda3c09075f826f92c3ae6" ON "products_categories_categories" ("productsIdentifier") `);
        await queryRunner.query(`CREATE INDEX "IDX_fa1ae34d326b97a88d2627b066" ON "products_categories_categories" ("categoriesIdentifier") `);
        await queryRunner.query(`ALTER TABLE "products_categories_categories" ADD CONSTRAINT "FK_0413eda3c09075f826f92c3ae6c" FOREIGN KEY ("productsIdentifier") REFERENCES "products"("identifier") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "products_categories_categories" ADD CONSTRAINT "FK_fa1ae34d326b97a88d2627b066a" FOREIGN KEY ("categoriesIdentifier") REFERENCES "categories"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products_categories_categories" DROP CONSTRAINT "FK_fa1ae34d326b97a88d2627b066a"`);
        await queryRunner.query(`ALTER TABLE "products_categories_categories" DROP CONSTRAINT "FK_0413eda3c09075f826f92c3ae6c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fa1ae34d326b97a88d2627b066"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0413eda3c09075f826f92c3ae6"`);
        await queryRunner.query(`DROP TABLE "products_categories_categories"`);
    }

}
