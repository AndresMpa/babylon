import { MigrationInterface, QueryRunner } from "typeorm";

export class currentMigration1676740557029 implements MigrationInterface {
    name = 'currentMigration1676740557029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ordersItems" ("identifier" SERIAL NOT NULL, "quantity" integer NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "productIdentifier" integer, "orderIdentifier" integer, CONSTRAINT "PK_9e6a09afae99e457ed0f21dc3fe" PRIMARY KEY ("identifier"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("identifier" SERIAL NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "customerIdentifier" integer, CONSTRAINT "PK_78cecc842b8466d47a9afe96dc6" PRIMARY KEY ("identifier"))`);
        await queryRunner.query(`ALTER TABLE "ordersItems" ADD CONSTRAINT "FK_539085a5d3b8fecb32846fdbaf1" FOREIGN KEY ("productIdentifier") REFERENCES "products"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordersItems" ADD CONSTRAINT "FK_355d7f162032a249521050bef26" FOREIGN KEY ("orderIdentifier") REFERENCES "orders"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_d65f5b788586cb79305ac9b840a" FOREIGN KEY ("customerIdentifier") REFERENCES "customers"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_d65f5b788586cb79305ac9b840a"`);
        await queryRunner.query(`ALTER TABLE "ordersItems" DROP CONSTRAINT "FK_355d7f162032a249521050bef26"`);
        await queryRunner.query(`ALTER TABLE "ordersItems" DROP CONSTRAINT "FK_539085a5d3b8fecb32846fdbaf1"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "ordersItems"`);
    }

}
