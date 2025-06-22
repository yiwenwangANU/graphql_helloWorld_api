import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";

import typeDefs from "./schema/typeDefs.js";
import resolvers from "./schema/resolvers.js";

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })], // for grace shutdown
});
await server.start();

app.use(cors()); // allow everyheader, every mothod from everywhere
app.use(express.json()); // body-parser
app.use(expressMiddleware(server)); //to use Apollo Server as middleware,
// set up the GraphQL endpoint (typically /graphql) for handling GraphQL queries and mutations.

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);
