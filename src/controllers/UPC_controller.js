const UPC = require ('../models/UPC')
const User = require('../models/user.js');
const Postage = require ('../models/postage.js');

module.exports = {

    async create_comment (req, res){
        return res.status(200)
    },

    async list_all (req, res){
        const upc = await UPC.find();
        return res.status(200).json(upc);
    },

    async delete_all (req, res){
        const upc = await UPC.deleteMany({})
        return res.send(upc);
    },

    async comment_postage (req, res){

        try{
            await UPC.create({
                fk_user_id: req.user._id, 
                fk_postage_id: req.postage._id,
                UPC_description: req.body.comment_descripton,
                UPC_author: req.user.user_name
            })

            return res.status(200).send("Comentário à Postagem " + req.postage.post_title + " foi feito!");
        }catch(err){
            return res.status(400).send({error_comment_postage: err.message});
        }
    }
}