const mongoose = require('mongoose');
var HOST

if (process.env.TEST){
    HOST = global.__MONGO_URI__ 
}else{
    HOST = process.env.DB_HOST
}

    mongoose.Promise = global.Promise;
    mongoose.connect(HOST, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false
    }).then(() => {
        console.log("MongoDB Conected at port " + `${process.env.PORT}`)
    }, err => {
        console.log(err)
    })