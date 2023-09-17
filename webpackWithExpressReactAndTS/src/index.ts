import { Request, Response } from "express";
import * as express from "express";
import cors = require("cors");

import { config } from "./config/vars";
import { initialState } from "./config/initialState";

const app = express();

app.use(cors<Request>());

app.get("/", (req: Request, res: Response) => res.send("Hello Typescript"));

app.get(`/api/${config.version}/`, (req: Request, res: Response) =>
  res.json(initialState),
);

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
