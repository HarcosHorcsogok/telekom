const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const PORT = process.argv[2] || 3000;

const CaesarCoder = require('./server.js');

app.use(bodyParser.json());

app.use('/api', CaesarCoder);

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));
