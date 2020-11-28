const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    user_email:{
        type: String,
        required: true,
    },
    user_password:{
        type: String,
        required: true,
    },
    user_name:{
        type: String,
        required: true,
    },
    user_score:{
        type: Number,
        default: 0,
    },
    user_array_UPS:{
        type: Array,
        default: [],
    }
});

UserSchema.pre('save', async function (next){
    const hash = await bcrypt.hash(this.user_password, 10);
    this.user_password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
