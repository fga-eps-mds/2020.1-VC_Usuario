require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
/* app.use((req, res,) => {
    console.log("midleware!");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');  
    app.use(cors()); 
}); */ 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use('/img', express.static(path.resolve(__dirname, '..', 'tmp', 'img_uploads'))); //url de imagens
app.use(require("./routes"));

app.get('/', (req, res) => {
    res.json({"esta": "funcionando"});
});

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.DB_HOST}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log("MongoDB Conectado!")
}).catch((err) => {
    console.log("Erro: "+err)
})

app.listen(process.env.PORT);
