const UPS = require ('../models/UPS.js');
const User = require('../models/user.js');
const Postage = require ('../models/postage.js');
const { search } = require('../routes.js');

module.exports = {

    async create_ups (req, res){
        console.log("entrou")

        try {
            console.log("entrou1")
            /* console.log(req.body.UPS_id, req.body.fk_user_id, req.body.fk_postage_id);  */

            const ups = await UPS.create(req.body);

            console.log("entro2")
            console.log(ups);
            console.log("entro3")
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

    async check_exist_user_and_postage (req, res, next){

        try{
            console.log("\n-----\n" + "\nChecking User and Post Exist...")

            const exist_user = await User.findById(req.body.user_id)
            const exist_postage = await Postage.findById(req.body.postage_id)

            if(exist_user == null || exist_postage == null){
                console.log("User or Postage not exist\n" + "\n-----\n")
                return res.status(400).send({error_UPS_check_exist_user_and_postage: "User or Postage not exist"});
            }
            else{
                console.log("User and Postage exist!\n")
            }

            return next();   
        }catch(err){
            return res.status(400).send({error_UPS_check_exist_user_and_postage: err.message});
        }
    },

    async support_postage (req, res, next){   
        
        try{
            console.log("Support Postage...")
            
            const array_UPSs = await UPS.find({fk_user_id: req.body.user_id, fk_postage_id: req.body.postage_id})
            const user_related_ups = await User.findById(req.body.user_id)
            
            if(array_UPSs.length == 0){

                await UPS.create({fk_user_id: req.body.user_id, fk_postage_id: req.body.postage_id})
                user_related_ups.user_score += 10;
                await user_related_ups.update({user_score: user_related_ups.user_score});

                console.log("New UPS successfully created!\n")
            }
            else if(array_UPSs.length == 1){
                
                const ups_remove = await UPS.findById(array_UPSs[0]._id);
                await ups_remove.remove();

                user_related_ups.user_score -= 10;
                await user_related_ups.update({user_score: user_related_ups.user_score});
                console.log("UPS already created, successfully deleted!\n")
            }
            else{
                console.log("Error, to much UPSs created!\n" + "\n-----\n")
                return res.status(400).send({error_support_postage: "To much UPSs created with this parameters"});
            }

            return next()
        }catch(err){
            return res.status(400).send({error_support_postage: err.message});
        }
    },

    async post_support_number_alteration (req, res){
        try{
            console.log("Changing support number...")

            const array_UPSs = await UPS.find({ fk_user_id: req.body.user_id, fk_postage_id: req.body.postage_id })
            
            if(array_UPSs.length > 1){
                console.log("Error, To much UPSs created with this parameters\n" + "\n-----\n")
                return res.status(400).send({error_post_support_number_alteration: "To much UPSs created with this parameters"});
            }
            
            const postage_related_ups = await Postage.findById(req.body.postage_id)
            var postage_UPSs_number = postage_related_ups.post_support_number

            var aux = 0
            if(array_UPSs.length == 0){
                aux = -1
            }
            else if(array_UPSs.length == 1){
                aux = +1
            }

            postage_UPSs_number += aux
            postage_related_ups.post_support_number = postage_UPSs_number
            await postage_related_ups.update({post_support_number: postage_related_ups.post_support_number});

            console.log("Change in support number successfully done!\n" + "\n-----\n")
            return res.status(200).send("Apoio da Postagem " + postage_related_ups.post_title + " foi modificado");
        }catch(err){
            return res.status(400).send({error_post_support_number_alteration: err.message});
        }
    }
}