import express from 'express';
import cors from 'cors';
import routes from './config/route-config';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;