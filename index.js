const express = require('express');
const { ApolloServer } = require('apollo-server-express');
import redis from 'redis';
import bluebird from 'bluebird'

import typeDefs from './schema'
import resolvers from './resolvers'

const client = redis.createClient();

bluebird.promisifyAll(redis);

client.on("error", err => {
    console.log("Error " + err);
});

const server = new ApolloServer({ typeDefs, resolvers, context: {client} });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);