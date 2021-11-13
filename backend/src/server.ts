import 'dotenv/config';
import express from 'express';


import './database';

const app = express();

app.listen(4000, () => console.log('Server is running on PORT 4000'));