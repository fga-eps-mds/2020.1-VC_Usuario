const Postage = require ('../models/postage.js');
const UPS = require('../models/UPS.js');
const UPC = require('../models/UPC.js');
const User = require('../models/user.js');
const UPR = require('../models/UPR.js');

module.exports = {

    async create_postage (req, res, next){
        try{
            if(req.file){
                req.body.post_midia = `${process.env.APP_HOST}/img/${req.file.filename}`;
            }
            
            req.postage = await Postage.create(req.body)

            req.postage.post_support_number = 0
            req.postage.post_supporting = false
            req.postage.post_post_reporting = false

            return next()            
        }catch(err){
            return res.status(400).send({error_create_postage: err.message});
        }
    },

    async create_common (req, res){
        try{
            req.postage.post_author = req.user.user_name
            req.postage.save()

            req.user.user_score += 100;
            await req.user.update({user_score: req.user.user_score});

            return res.status(200).json(req.postage);
        }catch(err){
            return res.status(400).send({error_create_common: err.message});
        }
    },

    async create_anon (req, res){
        try{
            req.postage.fk_user_id = null
            req.postage.post_author = null
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
        try{
            const posts = await Postage.findById(req.params.id);
            return res.json(posts);
        }catch(err){
            return res.status(400).send({ error_list_one: err.message});
        }
    },

    async list_one_logged (req, res){
        try{
            const posts_logged = await Postage.findById(req.params.postage_id);

            const array_UPSs = await UPS.find({ 
                fk_user_id: req.user._id,
                fk_postage_id: posts_logged._id
            })

            const array_UPRs = await UPR.find({
                fk_user_id: req.params.user_id,
                fk_postage_id: req.params.postage_id
            }) 
            
            posts_logged.post_supporting = false
            posts_logged.post_reporting = false
            
            if(array_UPSs.length != 0){
                posts_logged.post_supporting = true
            }

            if(array_UPRs.length != 0){
                posts_logged.post_reporting = true
            } 
        
            return res.json(posts_logged);
        }catch(err){
            return res.status(400).send({ error_list_one_logged: err.message});
        }
    },

    async delete_all (req, res){
        try{
            const post = await Postage.deleteMany({})
            return res.send(post);
        }catch(err){
            return res.status(400).send({error_delete_all: err.message});
        }
    },

    async list_common (req, res){
        try{
            const posts = await Postage.find({"fk_user_id": { $exists: true, $ne: null }, "post_reports": { $lt: 5 }});

            return res.status(200).json({posts});
        }catch(err){
            return res.status(400).send({error_list_common: err.message});
        }
    },

    async list_by_category (req, res){
        try{
            const categoria = req.query.categoria;

            const posts = await Postage.find({ post_category: categoria, "fk_user_id": { $exists: true, $ne: null }}, { 
                post_description: 0,
                post_permission: 0
            });

            return res.status(200).json({posts});
        }catch(err){
            return res.status(400).send({error_list_by_category: err.message});
        }
    },

    async update_status (req, res){
        try{
            if(req.body.post_status != "Aguardando" || req.body.post_status != "Em Andamento" || req.body.post_status != "Resolvido"){
                return res.status(400).send({msg: 'Status incorreto'});
            }

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
            req.postages_list = await Postage.find({"fk_user_id": { $exists: true, $ne: null }});

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

            return res.status(200).json(req.postages_list)
        }catch(err){
            return res.status(400).send({error_take_ups_of_postages: err.message});        
        }
    },

    async check_postage_is_not_anon (req, res, next){
        try{
            if(req.postage.fk_user_id == null){
                return res.status(400).send({error_check_postage_is_not_anon: "Postage is Anonymous"});   
            }
            else{
                return next()
            }
        }catch(err){
            return res.status(400).send({error_check_postage_is_not_anon: err.message});   
        }
    },

    async check_user_of_postage (req, res, next){
        try{
            if(req.postage.fk_user_id != req.body.fk_user_id){
                return res.status(400).send({error_check_user_of_postage: "User is different from user's postage"}); 
            }
            else{
                return next()
            }
        }catch(err){
            return res.status(400).send({error_check_user_of_postage: err.message});
        }
    },

    async update_postage (req, res){
        try{
            var { post_title, post_description, post_category, post_place } = req.body;
            const new_postage_params = { post_title, post_description, post_category, post_place }
    
            await Postage.findByIdAndUpdate(req.postage._id, new_postage_params)

            return res.status(200).send("Postage successfully edited!")
        }catch(err){
            return res.status(400).send({error_update_postage: err.message}); 
        }
    },

    async delete_postage (req, res){
        try{
            req.user.user_score -= 100;
            await req.user.update({user_score: req.user.user_score});
            
            await req.postage.remove();

            return res.status(200).send("Postage successfully deleted!");
        }catch(err){
            return res.status(400).send({error_delete_postage: err.message}); 
        }
    },

    async list_UPCs_by_postage (req, res){
        try{
            const UPC_list = await UPC.find({ fk_postage_id: req.params.id })

            return res.status(200).json(UPC_list);
        }catch(err){
            return res.status(400).send({error_list_UPCs_by_postage: err.message}); 
        }
    },

    async delete_postage_objects_child (req, res, next){
        try{
            await UPS.deleteMany({ fk_postage_id: req.postage._id })
            await UPC.deleteMany({ fk_postage_id: req.postage._id })

            return next()
        }catch(err){
            return res.status(400).send({error_delete_postage_UPSs: err.message});
        }
    }
}