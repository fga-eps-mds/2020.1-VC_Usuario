const mongoose = require('mongoose');

const UPRSchema = new mongoose.Schema({
    fk_user_id:{
        type: String,
        required: true,
    },
    fk_postage_id:{
        type: String,
        required: true,
    },
})

const UPR = mongoose.model('UPR', UPRSchema);
module.exports = UPR;
