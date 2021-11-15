const express = require('express');
const cors = require('cors');
const app = express();

const env = require('./config/environment');
const primeNumbersController = require('./controllers/prime-numbers.controller');

app.use(cors());
app.use(express.json());

app.use('/api/data', primeNumbersController);

app.listen(env.port, console.log(`Server listening at port ${env.port}`));

module.exports = app;