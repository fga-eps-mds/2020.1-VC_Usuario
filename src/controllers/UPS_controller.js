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
            return res.status(400).send({ error: err.message});
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
            const exist_user = await User.findById(req.body.fk_user_id)
            const exist_postage = await Postage.findById(req.body.fk_postage_id)

            console.log("---\n" + "Checking User and Post Exist...\n")

            if(exist_user == null && exist_postage == null){
                console.log("User and Postage not exist\n" + "---\n")
                return res.status(400).send({error_UPS_check_exist_user_and_postage: "User and Postage not exist"});
            }
            else if(exist_user == null){
                console.log("User not exist\n" + "---\n")
                return res.status(400).send({error_UPS_check_exist_user_and_postage: "User not exist"});
            }
            else if(exist_postage == null){
                console.log("Postage not exist\n" + "---\n")
                return res.status(400).send({error_UPS_check_exist_user_and_postage: "Postage not exist"});
            }

            console.log("User and Postage exist\n" + "---\n")

            return next();   
        }catch(err){
            return res.status(400).send({error_UPS_check_exist_user_and_postage: err.message});
        }
    },

    async support_postage (req, res){   
        
        try{
            const array_UPSs = await UPS.find({ fk_user_id: req.body.fk_user_id, fk_postage_id: req.body.fk_postage_id })          

            console.log("---\n" + "Support Postage...\n")
            if(array_UPSs.length == 0){

                const created_ups = await UPS.create(req.body)

                const user_for_insert_ups = await User.findById(req.body.fk_user_id)
           
                user_for_insert_ups.user_array_UPS.unshift(created_ups)
                user_for_insert_ups.save()

                console.log("New UPS successfully created\n" + "---\n")
                return res.status(200).json(user_for_insert_ups.user_array_UPS[0]);
            }
            else if(array_UPSs.length == 1){
                
                const ups_remove = await UPS.findById(array_UPSs[0]._id);

                /* const user_for_insert_ups = await User.findById(req.body.fk_user_id)

                console.log("=>" + user_for_insert_ups.user_array_UPS.length)
                for(var i=0; i<user_for_insert_ups.user_array_UPS.length; i++) {
                    if(user_for_insert_ups.user_array_UPS[i].fk_postage_id == ups_remove.fk_postage_id && user_for_insert_ups.user_array_UPS[0].fk_user_id == ups_remove.fk_user_id){
                        console.log("++++ Index:")
                        console.log(user_for_insert_ups.user_array_UPS.indexOf(user_for_insert_ups.user_array_UPS[i]))
                        user_for_insert_ups.user_array_UPS.slice(i, 1)
                        user_for_insert_ups.save()
                        console.log(user_for_insert_ups.user_array_UPS)
                        console.log("++++")
                        break
                    }
                }
                console.log("=>>" + user_for_insert_ups.user_array_UPS.length) */

                await ups_remove.remove();

                const check_ups_remove = await UPS.findById(array_UPSs[0]._id);
                if(check_ups_remove == null){
                    console.log("UPS already created, successfully deleted\n" + "---\n")
                    return res.status(200).send({support_postage: "UPS already created, successfully deleted"});
                }
                else{
                    console.log("UPS already created, error delete\n" + "---\n")
                    return res.status(400).send({error_support_postage: "UPS already created, error delete"});
                }
            }
            else{
                console.log("To much UPSs created\n" + "---\n")
                return res.status(400).send({error_support_postage: "To much UPSs created with this parameters"});
            }
        }catch(err){
            return res.status(400).send({error_support_postage: err.message});
        }
    }
}