import { MigrationInterface, QueryRunner } from 'typeorm';

export class MofifyAccount1579797544066 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "account" ADD COLUMN "avatar" VARCHAR`);
  }
  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "avatar"`);
  }
}
