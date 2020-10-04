const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const UPSSchema = new mongoose.Schema({
    fk_user_id:{
        type: ObjectId,
        required: true,
    },
    fk_postage_id:{
        type: ObjectId,
        required: true,
    },
})

const UPS = mongoose.model('UPS', UPSSchema);
module.exports = UPS;
