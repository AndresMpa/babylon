import { MigrationInterface, QueryRunner } from "typeorm";

export class currentMigration1677170937103 implements MigrationInterface {
    name = 'currentMigration1677170937103'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("identifier" SERIAL NOT NULL, "description" text NOT NULL, "name" character varying NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_15351ae4f6119801711db7a436d" PRIMARY KEY ("identifier"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8b0be371d28245da6e4f4b6187" ON "categories" ("name") `);
        await queryRunner.query(`CREATE TABLE "products" ("identifier" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL, "price" integer NOT NULL, "stock" integer NOT NULL, "image" character varying NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "brand_identifier" integer, CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"), CONSTRAINT "PK_d768083d9ce6bf45327ff153625" PRIMARY KEY ("identifier"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4fbc36ad745962e5c11001e1a8" ON "products" ("price", "stock") `);
        await queryRunner.query(`CREATE TABLE "brands" ("identifier" SERIAL NOT NULL, "image" character varying NOT NULL, "name" character varying NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_96db6bbbaa6f23cad26871339b6" UNIQUE ("name"), CONSTRAINT "PK_a8cc8f95e321c3cdc4af3458e01" PRIMARY KEY ("identifier"))`);
        await queryRunner.query(`CREATE INDEX "IDX_96db6bbbaa6f23cad26871339b" ON "brands" ("name") `);
        await queryRunner.query(`CREATE TABLE "order_items" ("identifier" SERIAL NOT NULL, "quantity" integer NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "product_identifier" integer, "order_identifier" integer, CONSTRAINT "PK_d59ddf07cb240910d2190ec5228" PRIMARY KEY ("identifier"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("identifier" SERIAL NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "customer_identifier" integer, CONSTRAINT "PK_78cecc842b8466d47a9afe96dc6" PRIMARY KEY ("identifier"))`);
        await queryRunner.query(`CREATE TABLE "customers" ("identifier" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "last_name" character varying(25) NOT NULL, "phone" character varying(15) NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_cfbf0c41ed45536cb76d998b8ba" PRIMARY KEY ("identifier"))`);
        await queryRunner.query(`CREATE TABLE "accounts" ("identifier" SERIAL NOT NULL, "password" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "role" character varying(255) NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "customer_identifier" integer, CONSTRAINT "REL_f1e792d1e4b321e4ebbc64a2d7" UNIQUE ("customer_identifier"), CONSTRAINT "PK_4ab221da872e3a22c20258f3c88" PRIMARY KEY ("identifier"))`);
        await queryRunner.query(`CREATE TABLE "products_categories" ("product_identifier" integer NOT NULL, "category_identifier" integer NOT NULL, CONSTRAINT "PK_451ace1a4047a8b29a01e3856ea" PRIMARY KEY ("product_identifier", "category_identifier"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0397ea65c4661460e25a4e0f67" ON "products_categories" ("product_identifier") `);
        await queryRunner.query(`CREATE INDEX "IDX_0045211f4d4e62ebbf63c44fc3" ON "products_categories" ("category_identifier") `);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_860da77ff319efa5b14464c8e06" FOREIGN KEY ("brand_identifier") REFERENCES "brands"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_items" ADD CONSTRAINT "FK_8520451b7c4584237988ef96841" FOREIGN KEY ("product_identifier") REFERENCES "products"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_items" ADD CONSTRAINT "FK_742e887a3d7c3f579d82a6de2c1" FOREIGN KEY ("order_identifier") REFERENCES "orders"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_5e05204a1abe8c1fd945209c444" FOREIGN KEY ("customer_identifier") REFERENCES "customers"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_f1e792d1e4b321e4ebbc64a2d77" FOREIGN KEY ("customer_identifier") REFERENCES "customers"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products_categories" ADD CONSTRAINT "FK_0397ea65c4661460e25a4e0f672" FOREIGN KEY ("product_identifier") REFERENCES "products"("identifier") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "products_categories" ADD CONSTRAINT "FK_0045211f4d4e62ebbf63c44fc39" FOREIGN KEY ("category_identifier") REFERENCES "categories"("identifier") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products_categories" DROP CONSTRAINT "FK_0045211f4d4e62ebbf63c44fc39"`);
        await queryRunner.query(`ALTER TABLE "products_categories" DROP CONSTRAINT "FK_0397ea65c4661460e25a4e0f672"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_f1e792d1e4b321e4ebbc64a2d77"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_5e05204a1abe8c1fd945209c444"`);
        await queryRunner.query(`ALTER TABLE "order_items" DROP CONSTRAINT "FK_742e887a3d7c3f579d82a6de2c1"`);
        await queryRunner.query(`ALTER TABLE "order_items" DROP CONSTRAINT "FK_8520451b7c4584237988ef96841"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_860da77ff319efa5b14464c8e06"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0045211f4d4e62ebbf63c44fc3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0397ea65c4661460e25a4e0f67"`);
        await queryRunner.query(`DROP TABLE "products_categories"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "order_items"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_96db6bbbaa6f23cad26871339b"`);
        await queryRunner.query(`DROP TABLE "brands"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4fbc36ad745962e5c11001e1a8"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8b0be371d28245da6e4f4b6187"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
