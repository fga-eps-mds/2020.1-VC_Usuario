const UPS = require ('../models/UPS.js');

module.exports = {

    async create_ups (req, res){

        try {
            const ups = await UPS.create(req.body);

            return res.status(200).json(ups);

        } catch(error){
            return res.status(400).send({ error_create_ups: err.message});
        }
    },

    async list_all (req, res){
        const ups = await UPS.find();
        return res.json(ups);
    },

    async delete_all (req, res){
        const ups = await UPS.deleteMany({})
        return res.send(ups);
    },

    async support_postage (req, res, next){   
        
        try{
            req.UPS_list = await UPS.find({fk_user_id: req.user._id, fk_postage_id: req.postage._id})
            
            if(req.UPS_list.length == 0){

                await UPS.create({fk_user_id: req.user._id, fk_postage_id: req.postage._id})
                req.user.user_score += 10;
                await req.user.update({user_score: req.user.user_score});
            }
            else if(req.UPS_list.length == 1){
                
                const ups_remove = await UPS.findById(req.UPS_list[0]._id);
                await ups_remove.remove();

                req.user.user_score -= 10;
                await req.user.update({user_score: req.user.user_score});
            }
            else{
                return res.status(400).send({error_support_postage: "To much UPSs created with this parameters"});
            }

            return next()
        }catch(err){
            return res.status(400).send({error_support_postage: err.message});
        }
    },

    async post_support_number_alteration (req, res){
        
        try{            
            if(req.UPS_list.length > 1){
                return res.status(400).send({error_post_support_number_alteration: "To much UPSs created with this parameters"});
            }

            if(req.UPS_list.length == 0){
                req.postage.post_support_number += 1
            }
            else if(req.UPS_list.length == 1){
                req.postage.post_support_number -= 1
            }

            await req.postage.update({post_support_number: req.postage.post_support_number});

            return res.status(200).send("Apoio da Postagem " + req.postage.post_title + " foi modificado");
        }catch(err){
            return res.status(400).send({error_post_support_number_alteration: err.message});
        }
    }
}