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
            console.log("Comment Postage...")

            const postage_related_upc = await Postage.findById(req.body.postage_id)

            const new_UPC = await UPC.create({
                fk_user_id: req.body.user_id, 
                fk_postage_id: req.body.postage_id,
                UPC_description: req.body.comment_descripton
            })

            /* postage_related_upc.post_comments.unshift(new_UPC._id)
            await postage_related_upc.updateOne({post_comments: postage_related_upc.post_comments}); */

            console.log("New UPC successfully created!\n" + "\n-----\n")

            return res.status(200).send("Comentário à Postagem " + postage_related_upc.post_title + " foi feito!");
        }catch(err){
            return res.status(400).send({error_comment_postage: err.message});
        }
    },

    async delete_UPCs (req, res, next){
        
        try{
            console.log("Removing Postage's UPCs...")

            await UPC.deleteMany({ fk_postage_id: req.post._id })

            console.log("Postage's UPCs successfully deleted!\n")

            return next()
        }catch(err){
            return res.status(400).send({error_delete_UPCs: err.message});
        }
    }
}