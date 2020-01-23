import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from './components/config';

const db = () =>
  createConnection({
    type: 'postgres',
    host: config.postgresql.host,
    port: config.postgresql.port,
    username: config.postgresql.username,
    password: config.postgresql.password,
    database: config.postgresql.database,
    entities: [__dirname + '/entities/*.entity.ts'],
    synchronize: true,
    ssl: true
  });

export default db;
