const mongoose = require('mongoose');

const UPCSchema = new mongoose.Schema({
    fk_user_id:{
        type: String,
        required: true,
    },
    fk_postage_id:{
        type: String,
        required: true,
    },
    UPC_description: {
        type: String,
        required: true
    }
})

const UPC = mongoose.model('UPC', UPCSchema);
module.exports = UPC;
