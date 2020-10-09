import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { createConnection } from "typeorm"
import routes from "./routes";

const app = express();

createConnection()
  .then((connection) => {})
  .catch((error) => console.error(error));

app.use(bodyParser.json());
app.use(routes);
app.listen(3333);