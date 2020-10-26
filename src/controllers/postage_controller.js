const { json } = require('body-parser');
const { update } = require('../models/postage.js');
const Postage = require ('../models/postage.js');
const UPS = require('../models/UPS.js');
const User = require('../models/user.js');

module.exports = {
    async create_common (req, res){
        try{
            if(req.file){
                console.log(req.file);
                req.body.post_midia = `${process.env.APP_HOST}/img/${req.file.filename}`;
            }

            const postage = await Postage.create(req.body);

            postage.post_support_number = 0
            postage.save()
            
            console.log(postage);
            return res.status(200).json({postage});
            
        }catch(err){
            return res.status(400).send({ error: err.message});
        }
    },

    async create_anon (req, res){
        try{
            if(req.file){
                console.log(req.file);
                req.body.post_midia = `${process.env.APP_HOST}/img/${req.file.filename}`;
            }

            req.body.fk_user_id = null;

            const postage = await Postage.create(req.body);
            
            postage.post_support_number = 0
            postage.save()

            console.log(postage);
            return res.status(200).json({postage});
            
        }catch(err){
            return res.status(400).send({ error: err.message});
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

    async delete (req, res){
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
            const posts = await Postage.find({ $where: "this.fk_user_id != null" }, { 
                post_category: 0, 
                post_description: 0,
                post_permission: 0
            });
            
            console.log(posts);
            return res.status(200).json({posts});
        }catch(err){
            return res.status(400).send({error: err.message});
        }
    },

    async update_status (req, res){
        try{
          	const post = await Postage.findByIdAndUpdate(req.params.id, req.body.post_status)          
		return res.status(200).json({post});
        }catch(err){
            return res.status(400).send({error: err.message});
        }
    },
}
