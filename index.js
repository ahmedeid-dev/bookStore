import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import bootstrap from './src/module/bootstrap.js';

const app = express();
app.use(express.json())
bootstrap(app);