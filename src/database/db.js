const mongoose = require('mongoose');
const { db } = require('../models/user');

mongoose.Promise = global.Promise;
//mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/VC_back-end', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true 
}).then(() => {
    console.log("MongoDB Conectado!")
}).catch((err) => {
    console.log("Deu ruim no db: "+err)
})