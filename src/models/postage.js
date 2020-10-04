const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const PostageSchema = new mongoose.Schema({
    fk_user_id:{
        type: ObjectId
    },
    post_place:{
        type: String,
        required: true,
    },
    post_category:{
        type: String,
        required: true,
    },
    post_created_at:{
        type: Date,
        default: Date.now,
    },
    post_title: {
        type: String,
        required: true,
    },
    post_midia:{
        type:[String]
    },
    post_status:{
        type: String,
        default: "Aguardando"
    },
    post_description:{
        type: String,
        required: true,
    },
    post_permission:{
        type: Boolean,
        required: true,
    },/*
    apoio:{
        type: [ObjectId],
    },
    comentarios: {
        type: [ObjectId],
    }
    relev_degree: {
    	type: double,
    }
	*/
});

const Postage = mongoose.model('Postage', PostageSchema);
module.exports = Postage;
