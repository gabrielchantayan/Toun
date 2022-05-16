import { join } from 'path';
import express from 'express';
// const { errorHandler } = require('./middleware');

import config from './routes/config'

const api = express();

api.use(express.json());

api.use('/api/config', config);

module.exports = api;