const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

require('./controller/postage')(app);

app.get('/', (req, res) => {
    res.send('Funcionando!!');
});

/*const mongoose = require('mongoose');

// MongoDB connection
mongoose
    .connect(
        'mongodb://mongo:27017/backend',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));*/

app.listen(PORT, HOST);