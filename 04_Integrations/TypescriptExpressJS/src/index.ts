import * as express from 'express';
import { Express, Request, Response } from 'express';

const app: Express = express();
const PORT: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello World!'
    })
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});