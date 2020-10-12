import "reflect-metadata";
import * as express from "express";
import { createConnection } from "typeorm"
import { typeDefs } from './schema'
import { resolvers } from "./resolvers"
import { movieGenres } from "./services/queryTMDB";

const {ApolloServer} = require("apollo-server");
const app = express();

createConnection()
  .then((connection) => {})
  .catch((error) => console.error(error));

// app.use(bodyParser.json());
// app.use(routes);
// app.listen(3333);


const server = new ApolloServer({ typeDefs, resolvers });
console.log(movieGenres());
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});