import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAccount1579791031400 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE account (
        id serial NOT NULL,
        username varchar NOT NULL,
        "password" varchar NOT NULL,
        email varchar NOT NULL,
        "role" varchar NOT NULL,
        avatar varchar NOT NULL,
        CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY (id)
      );
    `);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE cat;');
  }
}
