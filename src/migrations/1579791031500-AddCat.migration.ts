import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCat1579791031500 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE cat (
        id serial NOT NULL,
        "name" varchar NOT NULL,
        color varchar NOT NULL,
        image varchar NOT NULL,
        CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY (id)
      );
    `);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE account;');
  }
}
