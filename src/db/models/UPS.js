const mongoose = require('mongoose');

const UPSSchema = new mongoose.Schema({
    fk_user_id:{
        type: String,
        required: true,
    },
    fk_postage_id:{
        type: String,
        required: true,
    },
})

const UPS = mongoose.model('UPS', UPSSchema);
module.exports = UPS;
