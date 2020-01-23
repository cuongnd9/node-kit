import express, { Application, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import apiRoute from './routes';
import schema from './graphql';

// Create a new express application instance.
const app: Application = express();

// REST API
app.get('/', function(_, res: Response) {
  res.send('Xin chào 👋🇻🇳');
});
app.use('/api', apiRoute);

// Initialize apollo server.
const server = new ApolloServer({ schema });

// Apply middleware.
server.applyMiddleware({ app, cors: true });

export default app;
