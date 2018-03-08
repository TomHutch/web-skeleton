const express = require('express');
const path = require('path');
const api = require('./api');
const logger = require('./lib/logger');

const app = express();

app.use('/', express.static(path.resolve(__dirname, '..', '..', 'dist', 'client')));
app.use('/api', api);

app.listen(3000, () => logger.info('Listening on port 3000'));
