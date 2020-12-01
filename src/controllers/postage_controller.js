const { json } = require('body-parser');
const { update, find } = require('../models/postage.js');
const Postage = require ('../models/postage.js');
const UPS = require('../models/UPS.js');
const UPC = require('../models/UPC.js');
const User = require('../models/user.js');

module.exports = {

    async create_postage (req, res, next){
        try{
            if(req.file){
                req.body.post_midia = `${process.env.APP_HOST}/img/${req.file.filename}`;
            }
            
            req.postage = await Postage.create(req.body)

            req.postage.post_support_number = 0
            req.postage.post_supporting = false
            req.postage.save()

            const user = await User.findById(req.body.fk_user_id)
            user.user_score += 100;
            await user.update({user_score: user.user_score});

            return next()            
        }catch(err){
            return res.status(400).send({error_create_postage: err.message});
        }
    },

    async create_common (req, res){
        try{
            return res.status(200).json(req.postage);
        }catch(err){
            return res.status(400).send({error_create_common: err.message});
        }
    },

    async create_anon (req, res){
        try{
            req.postage.fk_user_id = null
            req.postage.save()

            return res.status(200).json(req.postage);            
        }catch(err){
            return res.status(400).send({ error_create_anon: err.message});
        }
    },

    async list (req, res){
        const posts = await Postage.find();
        return res.json(posts);
    },

    async list_one (req, res){
        const posts = await Postage.findById(req.params.id);
        return res.json(posts);
    },

    async list_one_logged (req, res){
        const posts_logged = await Postage.findById(req.params.postage_id);

        const array_UPSs = await UPS.find({ 
            fk_user_id: req.params.user_id,
            fk_postage_id: req.params.postage_id
        })
        
        posts_logged.post_supporting = false
        
        if(array_UPSs.length != 0){
            posts_logged.post_supporting = true
        }

        return res.json(posts_logged);
    },

    async delete_one_for_test (req, res){
        const post = await Postage.findById(req.params.id);
        await post.remove();
        return res.send();
    },

    async delete_all (req, res){
        const post = await Postage.deleteMany({})
        return res.send(post);
    },

    async list_common (req, res){
        try{
            const posts = await Postage.find({ "fk_user_id": { $exists: true, $ne: null } });

            return res.status(200).json({posts});
        }catch(err){
            return res.status(400).send({error: err.message});
        }
    },

    async list_by_category (req, res){
        const categoria = req.query.categoria;
        try{
            const posts = await Postage.find({ post_category: categoria, "fk_user_id": { $exists: true, $ne: null }}, { 
                post_description: 0,
                post_permission: 0
            });

            return res.status(200).json({posts});
        }catch(err){
            return res.status(400).send({error_list_common: err.message});
        }
    },

    async update_status (req, res){
        try{
            const post = await Postage.findByIdAndUpdate(req.params.id, { post_status: req.body.post_status })
            const user = await User.findById(post.fk_user_id)
            
            if(post.post_status == "Em Andamento") {
                user.user_score += 100;
                await user.update({user_score: user.user_score});
            }

            else if (post.post_status == 'Resolvido') {
                user.user_score += 400;
                await user.update({user_score: user.user_score});
            }          
		    return res.status(200).json({post});
        }catch(err){
            return res.status(400).send({error_update_status: err.message});
        }
    },

    async list_common_postages (req, res, next){ 

        try{
            req.user = await User.findById(req.params.id)
            /* if(req.user == null){
                console.log("User not exist!\n" + "\n-----\n")
                return res.status(400).send({error_list_common_postages: "User not exist"});
            } */
            
            req.postages_list = await Postage.find({"fk_user_id": { $exists: true, $ne: null }});

            console.log("-----\n\n" + "LIST COMMON POSTAGES WITH UPSs:")
            console.log("\nListing common postages...")

            return next()
        }catch(err){
            return res.status(400).send({error_list_common_postages: err.message});        
        }
    },

    async take_ups_of_postages (req, res){
        
        try{
            let array_UPSs = null

            for (var i = 0; i < req.postages_list.length; i++){

                    array_UPSs = await UPS.find({ 
                    fk_user_id: req.user._id,
                    fk_postage_id: req.postages_list[i]._id
                })
                
                req.postages_list[i].post_supporting = false
                
                if(array_UPSs.length != 0){
                    req.postages_list[i].post_supporting = true
                }
            }

            console.log("Postages listed!\n" + "\n-----\n")

            return res.status(200).json(req.postages_list)
        }catch(err){
            return res.status(400).send({error_list_common_postages: err.message});        
        }
    },

    async check_postage_is_not_anon (req, res, next){

        try{
            console.log("Checking the postage is not anonymous...")

            const post = await Postage.findById(req.body.postage_id);

            if(post.fk_user_id == null){
                console.log("Error, Postage is anonymous!\n" + "\n-----\n")
                return res.status(400).send({error_check_postage_is_not_anon: "Postage is Anonymous"});   
            }
            else{
                console.log("Postage is not anonymous!\n")
                return next()
            }
        }catch(err){
            return res.status(400).send({error_check_postage_is_not_anon: err.message});   
        }
    },

    async check_user_of_postage (req, res, next){

        try{
            console.log("Checking user's postage...")

            req.post = await Postage.findById(req.body.postage_id);
            if(req.post.fk_user_id != req.body.user_id){
                console.log("Error, User is different from user's postage!\n" + "\n-----\n")
                return res.status(400).send({error_check_user_of_postage: "User is different from user's postage"}); 
            }
            else{
                console.log("User's postage is equal to User!\n")
                return next()
            }
        }catch(err){
            return res.status(400).send({error_check_user_of_postage: err.message});
        }
    },

    async update_one (req, res){

        try{
            console.log("Editing Postage...")

            var { post_title, post_description, post_category, post_place } = req.body;
            const new_postage_params = { post_title, post_description, post_category, post_place }
    
            const edited_post = await Postage.findByIdAndUpdate(req.post._id, new_postage_params)
            console.log("Postage successfully edited!\n" + "\n-----\n")

            return res.status(200).send("Postage successfully edited!")
        }catch(err){
            return res.status(400).send({error_update_one: err.message}); 
        }
    },

    async delete_one (req, res){
        
        try{
            console.log("Removing Postage...")
            
            await req.post.remove();
            console.log("Postage successfully deleted!\n" + "\n-----\n")

            return res.status(200).send("Postage successfully deleted!");
        }catch(err){
            return res.status(400).send({error_delete_one: err.message}); 
        }
    },

    async list_UPCs_by_postage (req, res){

        try{
            console.log("-----\n\n" + "Listing all comments...\n")
            
            const auxUPS = await UPC.find({ fk_postage_id: req.params.id })

            console.log(auxUPS.length + " Comments listed!\n" + "\n-----\n")

            return res.status(200).json(auxUPS);
        }catch(err){
            return res.status(400).send({list_UPCs_by_postage: err.message}); 
        }
    },

    async report_postage (req, res, next){   
        
        try{
            console.log("Reporting Postage...")
            
            const array_reports = await UPS.find({fk_user_id: req.body.user_id, fk_postage_id: req.body.postage_id})

            
            if(array_reports.length <= 1){

                await UPS.create({fk_user_id: req.body.user_id, fk_postage_id: req.body.postage_id})

                console.log("New report successfully created!\n")
            }
            else{
                console.log("Error, to much reports created!\n" + "\n-----\n")
                return res.status(400).send({error_report_postage: "To much reports created with this parameters"});
            }

            return next()
        }catch(err){
            return res.status(400).send({error_report_postage: err.message});
        }
    },

    async postage_report_number_alteration (req, res) {
        try{
            console.log("Reporting this postage...")

            const array_report = await Postage.find({fk_user_id: req.body.user_id, fk_postage_id: req.body.postage_id})

            if(array_report.length > 1){
                console.log("Error, To much reports created with this parameters\n" + "\n-----\n")
                return res.status(400).send({error_post_report_number_alteration: "To much reports created with this parameters"});
            }

            const postage_related_reports = await Postage.findById(req.body.postage_id)
            var postage_reports_number = postage_related_reports.post_reports

            //var aux = req.body.user_id

            if(array_report.length <= 3){
                postage_reports_number += 1
                console.log("mais um report")
            }
            else{
                req.postage.fk_user_id = null
                req.postage.save()
                console.log("Report successfully done!\n" + "\n-----\n")
                return res.status(200).send("Postagem " + postage_related_reports.post_title + " excluída devido a repetidos reports!");
            }

            postage_related_reports.post_reports = postage_reports_number
            await postage_related_reports.update({post_reports: postage_related_reports.post_reports});

            console.log("Report successfully done!\n" + "\n-----\n")
            return res.status(200).send("Denuncia da postagem " + postage_related_reports.post_title + " feita com sucesso!");

        }catch(err){
            return res.status(400).send({error_post_reports_alteration: err.message});
        }
    }
}