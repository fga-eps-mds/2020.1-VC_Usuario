const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use(require("./routes"));

//require('./controllers/postage')(app);

app.get('/', (req, res) => {
    res.json({"esta": "funcionando"});
});

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/backend', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log("MongoDB Conectado!")
}).catch((err) => {
    console.log("Erro: "+err)
})

app.listen(PORT, HOST);