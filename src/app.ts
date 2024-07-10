import express, { Application } from 'express';
import cors from 'cors';
import router from './app/router/router';


const app:Application = express()
app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/categories', (req, res) => {
    res.send('Hello World!')
    })

export default app;