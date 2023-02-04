import { MigrationInterface, QueryRunner } from 'typeorm';

export class currentMigration1675495054162 implements MigrationInterface {
  name = 'currentMigration1675495054162';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "products" ("identifier" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL, "price" integer NOT NULL, "stock" integer NOT NULL, "image" character varying NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"), CONSTRAINT "PK_d768083d9ce6bf45327ff153625" PRIMARY KEY ("identifier"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "categories" ("identifier" SERIAL NOT NULL, "description" text NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_15351ae4f6119801711db7a436d" PRIMARY KEY ("identifier"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "customers" ("identifier" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "phone" character varying(15) NOT NULL, CONSTRAINT "PK_cfbf0c41ed45536cb76d998b8ba" PRIMARY KEY ("identifier"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "brands" ("identifier" SERIAL NOT NULL, "image" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_96db6bbbaa6f23cad26871339b6" UNIQUE ("name"), CONSTRAINT "PK_a8cc8f95e321c3cdc4af3458e01" PRIMARY KEY ("identifier"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "admins" ("identifier" SERIAL NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_b23d1f2dddabe511f61768194bb" PRIMARY KEY ("identifier"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "admins"`);
    await queryRunner.query(`DROP TABLE "brands"`);
    await queryRunner.query(`DROP TABLE "customers"`);
    await queryRunner.query(`DROP TABLE "categories"`);
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
