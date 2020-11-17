const UPC = require ('../models/UPC')
const User = require('../models/user.js');
const Postage = require ('../models/postage.js');

module.exports = {

    async create_comment (req, res){
        return res.status(200)
    },

    async list_all (req, res){
        const upc = await UPC.find();
        return res.status(200).send("UPC list_all route successfully tested!");
    },

    async comment_postage(req, res){
        return res.status(200).send("UPC comment_postage route successfully tested!")
    }
}