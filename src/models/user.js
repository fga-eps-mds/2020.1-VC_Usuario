const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id_usuario:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    senha:{
        type: String,
        required: true,
        select: false,
    },
    nome:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    pontos:{
        type: Number,
        required:true,
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;