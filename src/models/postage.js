const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;


const PostageSchema = new mongoose.Schema({
    fk_id_usuario:{
        type: ObjectId,
    },/*
    fk_id_local:{
        type: ObjectId,
        required: true,
    },
    fk_id_categoria:{
        type: ObjectId,
        required: true,
    },*/
    createdAt:{
        type: Date,
        default: Date.now,
    },
    titulo_post: {
        type: String,
        required: true,
    },
    midia:{
        type:[String]
    },
    status:{
        type: String,
        default: "Aguardando"
    },
    descricao:{
        type: String,
        required: true,
    },
    canPost:{
        type: Boolean,
        required: true,
    },/*
    apoio:{
        type: [ObjectId],
    },
    comentarios: {
        type: [ObjectId],
    }*/
});

const Postage = mongoose.model('Postage', PostageSchema);
module.exports = Postage;