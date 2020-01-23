import 'reflect-metadata';
import { createConnection } from 'typeorm';

const db = () =>
  createConnection({
    type: 'postgres',
    host: 'ec2-174-129-33-139.compute-1.amazonaws.com',
    port: 5432,
    username: 'ofxijmmwyhmveh',
    password: '8f14d081b3c01259a61f0b5eb606d28b726e2c959967483a1e0b2198e5ad467e',
    database: 'd944eiog9a5a8j',
    entities: [__dirname + '/entities/*.entity.ts'],
    synchronize: true,
    ssl: true
  });

export default db;
