import dotenv from 'dotenv';
import express, { Application, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql';

// Config dotenv.
dotenv.config();

// Create a new express application instance.
const app: Application = express();

app.get('/', function(_, res: Response) {
  res.send('Xin chào 👋🇻🇳');
});

// Initialize apollo server.
const server = new ApolloServer({ schema });

// Apply middleware.
server.applyMiddleware({ app, cors: true });

export default app;
