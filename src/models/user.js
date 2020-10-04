const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const UserSchema = new mongoose.Schema({
    unique_id:{
        type: ObjectId,
        required: true,
    },
    user_email:{
        type: String,
        required: true,
    },
    user_password:{
        type: String,
        required: true,
        select: false,
    },
    user_name:{
        type: String,
        required: true,
    },
    user_score:{
        type: Number,
        required:true,
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
