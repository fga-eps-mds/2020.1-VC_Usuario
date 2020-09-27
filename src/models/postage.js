const mongoose = require('mongoose');

const PostageSchema = new mongoose.Schema({
    fk_id_usuario:{
        type: String,
        required: true,
    },
    /*fk_id_local:{
        type: Number,
        required: true,
    },
    fk_id_categoria:{
        type: Number,
        required: true,
    },
    titulo_post: {
        type: String,
        required: true,
    },
    data:{
        type: Date,
        default: Date.now,
    },
    status:{
        type: String,
        required: true,
    },*/
    descricao:{
        type: String,
        required: true,
    },
});

const Postage = mongoose.model('Postage', PostageSchema);
module.exports = Postage;