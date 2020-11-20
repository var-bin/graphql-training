require('dotenv').config();
import mongoose, { Connection } from 'mongoose';
import { ApolloServer } from 'apollo-server';

import { typeDefs, resolvers } from './graphql';

const PORT = 3005;
const MLAB_USER = process.env.MLAB_USER;
const MLAB_PASSWORD = process.env.MLAB_PASSWORD;
const mlabDBUri = `mongodb+srv://${MLAB_USER}:${MLAB_PASSWORD}@graphql-training.046ym.mongodb.net/GraphQL-Training-DB?retryWrites=true`;
const mlabDBConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

interface DBWithNamespace {
  namespace?: string;
}

type ConnectionWithNamespace = {
  [P in keyof Connection]: Connection[P];
} & { db: DBWithNamespace; }

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(mlabDBUri, mlabDBConfig)
  .then(() => server.listen({ port: PORT }))
  .then((res) => console.log(`Server started at: ${res.url}`));

const dbConnection: ConnectionWithNamespace = mongoose.connection;
dbConnection.on('error', (error) => console.error(`Connection error: ${error}`));
dbConnection.once('open', () => console.log(`Connected to DB: ${dbConnection.db.namespace}!`));
