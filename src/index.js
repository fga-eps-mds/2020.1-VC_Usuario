require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use('/img', express.static(path.resolve(__dirname, '..', 'tmp', 'img_uploads'))); //url de imagens
app.use(require("./routes"));

app.get('/', (req, res) => {
    res.json({"API Vamos Cuidar - Usuario" : "Funcionando"});
});

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.DB_HOST}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
}).then(() => {
    console.log("\nMongoDB Conectado!\n")
}).catch((err) => {
    console.log("Erro: "+err)
})

app.listen(process.env.PORT || 8000);
