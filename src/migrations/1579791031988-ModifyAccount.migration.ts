import { MigrationInterface, QueryRunner } from 'typeorm';

export class MofifyAccount1579791031988 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "account" ADD COLUMN "role" VARCHAR`);
  }
  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "role"`);
  }
}
