import dotenv from 'dotenv';
import express, { Application, Response } from 'express';
import bodyParser from 'body-parser';
import Boom from '@hapi/boom';
import rootRoute from './routes';
import errorHandler from './helpers/errorHandler';

// Config dotenv.
dotenv.config();

// Create a new express application instance.
const app: Application = express();

// Use body parser.
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.get('/', function(_, res: Response) {
  res.send('Xin chào 👋');
});

// Use root route.
app.use('/api', rootRoute);

// 404 not found.
app.use((req, res, next) => {
  next(Boom.notFound('API not found'));
});

// Global errors.
app.use(errorHandler);

export default app;
