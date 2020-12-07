require('dotenv').config();
require('./db/connection');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use('/img', express.static(path.resolve(__dirname, '..', 'tmp', 'img_uploads'))); //url de imagens
app.use(require("./routes"));

module.exports = app