const UPS = require ('../models/UPS.js');
const User = require('../models/user.js');
const Postage = require ('../models/postage.js');
const Comment = require ('../models/comment')

module.exports = {

    async create_comment (req, res){
        return res.status(200)
    },

    async list_all_comments (req, res){
        const comment = await Comment.find();
        return res.json(comment);
    },
}