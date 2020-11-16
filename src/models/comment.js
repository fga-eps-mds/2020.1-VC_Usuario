const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const CommentSchema = new mongoose.Schema({
    fk_user_id:{
        type: ObjectId
    },
    fk_postage_id:{
        type: ObjectId
    },
    comment_description: {
        type: String,
        required: true
    }

})

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
