import dotenv from 'dotenv';
import http from 'http';
import db from './db';
import app from './app';
import config from './components/config';

// Config dotenv.
dotenv.config();

db()
  .then(() => {
    const server = http.createServer(app);
    server.listen(config.port, () =>
      console.log(`Server is listening on port ${config.port}`)
    );
  })
  .catch((error: any) => console.log('TypeORM connection error: ', error));
