const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const UPASchema = new mongoose.Schema({
    fk_id_usuario:{
        type: ObjectId,
        required: true,
    },
    fk_id_post:{
        type: ObjectId,
        required: true,
    },
})

const UPA = mongoose.model('UPA', UPASchema);
module.exports = UPA;