import { Request, Response } from "express";
import * as express from "express";

import { config } from "./config/vars";

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Typescript')
});

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
