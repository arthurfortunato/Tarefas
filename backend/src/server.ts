import 'dotenv/config';
import express from 'express';

import { router } from './routes';
import './database';

const app = express();

app.use(express.json());
app.use(router);

app.listen(4000, () => console.log('Server is running on PORT 4000'));