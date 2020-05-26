import 'reflect-metadata';
import { createConnection } from 'typeorm';
import http from 'http';
import app from './app';
import config from './components/config';

createConnection()
  .then((): void => {
    const server = http.createServer(app);
    server.listen(config.port, () => console.log(`Server is listening on port ${config.port}`));
  })
  .catch((error: any) => console.log('TypeORM connection error: ', error));
