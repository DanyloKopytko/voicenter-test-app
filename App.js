const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

require('./database').getInstance();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { gamesRouter } = require('./routes');

app.use('/games', gamesRouter);

app.all('*', (req, res) => res.status(404).json('Error 404'));

const http = require('http').createServer(app);

const port = process.env.PORT;

http.listen(port, () => console.log(port));
