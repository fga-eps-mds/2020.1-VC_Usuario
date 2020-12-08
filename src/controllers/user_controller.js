const Users = require('../db/models/user.js');
const bcrypt = require('bcrypt')
const Postage = require ('../db/models/postage.js');
const UPS = require('../db/models/UPS.js');
const UPC = require('../db/models/UPC.js');

module.exports = {
    
    async register(req, res){
        try{
            const { user_email } = req.body;
            
            if (await Users.findOne({ user_email }))
                return res.status(400).send({ msg: 'Email já cadastrado'})

            const User = await Users.create(req.body);
            await User.update({user_score: 300});
            
            return res.status(200).send({User, msg: 'Cadastro feito com sucesso!'});
        }catch(err){
            return res.status(400).send({ msg: err.message});
        }
    },

    async list_all(req, res){
        const users = await Users.find();
        return res.json(users);
    },

    async delete(req, res){
        try{
            await req.user.remove();

            return res.status(200).send({msg: 'Usuário deletado com sucesso!'});
        }catch(err){
            return res.status(400).send({msg: err.message});
        }
    },

    async update(req, res, next){
        try{
            const user = await Users.findById(req.params.id);
            const need_update = !(user.user_name == req.body.nome)
            var version = user.__v + 1
            await user.update({user_email: req.body.email, user_name: req.body.nome, __v: version});

            if(need_update){
                return next()
            }else{
                return res.status(200).send({msg: 'Dados Atualizados com sucesso!'});
            }

            
        }catch(err){
            return res.status(400).send({error_update: err.message});
        }
    },

    async update_user_postages_author(req, res, next){
        try{
            const postage_list = await Postage.find({ fk_user_id: req.params.id })

            for (var i = 0; i < postage_list.length; i++){
                await postage_list[i].update({ post_author: req.body.nome })
            }

            return next();
        }catch(err){
            return res.status(400).send({error_update_user_postages_author: err.message});
        }
    },

    async update_user_comments_author(req, res){
        try{
            const comment_list = await UPC.find({ fk_user_id: req.params.id })

            for (var i = 0; i < comment_list.length; i++){
                await comment_list[i].update({ UPC_author: req.body.nome })
            }

            return res.status(200).send({msg: 'Dados Atualizados com sucesso!'});
        }catch(err){
            return res.status(400).send({error_update_user_comments_author: err.message});
        }
    },

    async change_password(req, res){
        try{
            const user = req.user

            if(req.body.novaSenha){
                const hash = await bcrypt.hash(req.body.novaSenha, 10);
                await user.update({user_password: hash});
            }

            return res.status(200).send({msg: 'Senha Atualizados com sucesso!'});
        }catch(err){
            return res.status(400).send({msg: err.message});
        }
    },

    async list_user_postages (req, res, next){
        try{
            req.postages_list = await Postage.find({ fk_user_id: req.params.id});

            return next() 
        }catch(err){
            return res.status(400).send({error_list_user_postages: err.message});        
        }
    },

    async list_postages (req, res){
        const posts = await Postage.find({ fk_user_id: req.params.id});
        return res.json(posts);
    },
    
    async delete_all (req, res){
        const users = await Users.deleteMany({})
        return res.send(users);
    },

    async find_user(req, res, next) {
        const user = await Users.findById(req.params.id);

        if(!user){
            return res.status(400).send({msg: 'Usuário não encontrado'});
        }

        req.user = user;
        return next();
    },

    async check_user_and_postage_exist (req, res, next){
        try{
            req.user = await Users.findById(req.body.fk_user_id)
            if(req.user == null){
                return res.status(400).send({error_check_user_and_postage_exist: "User not exist"});
            }
            
            req.postage = await Postage.findById(req.body.fk_postage_id)
            if(req.postage){
                if(req.postage == null){
                    return res.status(400).send({error_check_user_and_postage_exist: "Postage not exist"});
                }
            }

            return next()
        }catch(err){
            return res.status(400).send({error_check_user_and_postage_exist: err.message});
        }
    },

    async delete_user_objects_child (req, res, next){
        try{
            req.UPS_list = await UPS.find({fk_user_id: req.params.id})

            for (var i = 0; i < req.UPS_list.length; i++){
                req.postages_list = await Postage.findById(req.UPS_list[i].fk_postage_id)

                req.postages_list.post_support_number -= 1
                await req.postages_list.update({post_support_number: req.postages_list.post_support_number});
            }
            
            await UPS.deleteMany({ fk_user_id: req.params.id })
            await UPC.deleteMany({ fk_user_id: req.params.id })
            await Postage.deleteMany({ fk_user_id: req.params.id })

            return next()
        }catch(err){
            return res.status(400).send({error_delete_user_objects_child: err.message});
        }
    },
}