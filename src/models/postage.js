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
        type: String,
        default: function formated_date(){
            var date = new Date(),
                day  = date.getDate().toString().padStart(2, '0'),
                month  = (date.getMonth()+1).toString().padStart(2, '0'), 
                year  = date.getFullYear();
            return day+"/"+month+"/"+year;
        }
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
        type: [Boolean],
        required: true,
        default: [true, false]
    },
    post_support_number: {
        type: Number,
        default: 0
    },
    post_supporting:{
        type: Boolean,
        default: false
    },
    post_comments: {
        type: Array,
        default: []
    },
    /* 
    relev_degree: {
    	type: double,
    }
    */
    post_author:{
       type: String
    },

    post_reporting:{
        type: Boolean,
        default: false
    },

    post_reports: {
       type: Number,
       default: 0
    }
});

const Postage = mongoose.model('Postage', PostageSchema);
module.exports = Postage;
