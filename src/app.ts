import dotenv from 'dotenv';
import express, { Application, Response } from 'express';

// Config dotenv.
dotenv.config();

// Create a new express application instance.
const app: Application = express();

app.get('/', function(_, res: Response) {
  res.send('Xin chào 👋🇻🇳');
});

export default app;
