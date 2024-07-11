import express, { Express, Request, Response } from "express";

export interface testRequest {
  id: string;
}

const app: Express = express();
const port = 3000;

app.get("/", (req: Request<testRequest>, res: Response) => {
  res.send(`Hello world: ${req.body.id}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
