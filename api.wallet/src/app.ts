process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

// Env files
import dotenv = require('dotenv');

dotenv.config({
    path: `${__dirname}/config/${process.env.APP_ENV}.env`
});

console.log('ENVIRONMENT: ' + process.env.APP_FOO);

import express = require('express');
import { loadControllers } from 'awilix-express';
import loadContainer from "./container";

const app: express.Application = express();

// JSON Support
app.use(express.json());

loadContainer(app);

app.use(loadControllers(
    'controllers/*.ts',
    { cwd: __dirname }
));

export { app };