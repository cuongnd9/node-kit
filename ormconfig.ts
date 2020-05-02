const dotenv = require('dotenv');

dotenv.config();

const connectionOptions = {
  type: 'postgres',
  host:
    process.env.NODE_ENV === 'test'
      ? process.env.TEST_DB_HOST
      : process.env.DB_HOST,
  port:
    process.env.NODE_ENV === 'test'
      ? process.env.TEST_DB_PORT
      : process.env.DB_PORT,
  username:
    process.env.NODE_ENV === 'test'
      ? process.env.TEST_DB_USERNAME
      : process.env.DB_USERNAME,
  password:
    process.env.NODE_ENV === 'test'
      ? process.env.TEST_DB_PASSWORD
      : process.env.DB_PASSWORD,
  database:
    process.env.NODE_ENV === 'test'
      ? process.env.TEST_DB_DATABASE
      : process.env.DB_DATABASE,
  logging: process.env.NODE_ENV === 'development' ? true : false,
  dropSchema: process.env.NODE_ENV === 'test' ? true : false,
  entities: process.env.NODE_ENV === 'development' ?
    [__dirname + '/src/entities/**/*.entity.ts'] :
    [__dirname + '/build/entities/**/*.entity.js'],
  migrations: process.env.NODE_ENV === 'development' ?
    [__dirname + '/src/migrations/**/*.migration.ts'] :
    [__dirname + '/build/migrations/**/*.migration.js'],
  subscribers: process.env.NODE_ENV === 'development' ?
    [__dirname + '/src/subscribers/**/*.subscriber.ts'] :
    [__dirname + '/build/subscribers/**/*.subscriber.js'],
  cli: {
    entitiesDir: __dirname + '/src/entities',
    migrationsDir: __dirname + '/src/migrations',
    subscribersDir: __dirname + '/src/subscribers'
  },
  ssl: {
    rejectUnauthorized: false,
  },
  migrationsRun: true,
  // synchronize: true
};

module.exports = connectionOptions;
