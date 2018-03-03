const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();

app.use('/', express.static(path.resolve(__dirname, '..', '..', 'dist', 'client')));
app.use('/api', router);

app.listen(3000, () => console.log('Listening on port 3000'));
