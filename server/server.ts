require('dotenv').config();
import express from 'express';
import mongoose, { Connection } from 'mongoose';
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const PORT = 3005;
const MLAB_USER = process.env.MLAB_USER;
const MLAB_PASSWORD = process.env.MLAB_PASSWORD;
const mlabDBUri = `mongodb+srv://${MLAB_USER}:${MLAB_PASSWORD}@graphql-training.046ym.mongodb.net/GraphQL-Training-DB?retryWrites=true&w=majority`;

interface DBWithNamespace {
  namespace?: string;
}

type ConnectionWithNamespace = {
  [P in keyof Connection]: Connection[P];
} & { db: DBWithNamespace; }

mongoose.connect(mlabDBUri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbConnection: ConnectionWithNamespace = mongoose.connection;
dbConnection.on('error', (error) => console.error(`Connection error: ${error}`));
dbConnection.once('open', () => console.log(`Connected to DB: ${dbConnection.db.namespace}!`));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
