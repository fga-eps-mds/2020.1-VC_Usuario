const Users = require('../models/user.js');
const bcrypt = require('bcrypt')
const Postage = require ('../models/postage.js');

module.exports = {
    
    async register(req, res){
        const { user_email } = req.body;
        try{
            if (await Users.findOne({ user_email }))
                return res.status(400).send({ msg: 'Email já cadastrado'})

            const User = await Users.create(req.body);
            await User.update({user_score: 300});
            
            return res.status(200).send({User, msg: 'Cadastro feito com sucesso!'});
        }catch(err){
            return res.status(400).send({ msg: err.message});
        }

    },

    async list(req, res){
        const users = await Users.find();
        return res.json(users);
    },

    async delete(req, res){
        try{
            await req.body.user.remove();
            return res.status(200).send({msg: 'Usuário deletado com sucesso!'});

        }catch(err){
            return res.status(400).send({msg: err.message});
        }
    },

    async update(req, res){
        try{
            const user = await Users.findById(req.params.id);            
            var version = user.__v + 1
            await user.update({user_email: req.body.email, user_name: req.body.nome, __v: version});

            return res.status(200).send({msg: 'Dados Atualizados com sucesso!'});

        }catch(err){
            return res.status(400).send({error: err.message});
        }
    },

    async change_password(req, res){
        try{
            const user = req.body.user
            if(req.body.novaSenha){
                const hash = await bcrypt.hash(req.body.novaSenha, 10);
                await user.update({user_password: hash});
            }

            return res.status(200).send({msg: 'Senha Atualizados com sucesso!'});
        }catch(err){
            return res.status(400).send({msg: err.message});
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

    async check_user_exist (req, res, next){
        try{
            const user = await Users.findById(req.body.fk_user_id)
            if(user == null){
                console.log("User not exist!\n" + "\n-----\n")
                return res.status(400).send({error_check_user_exist: "User not exist"});
            }

            return next()
        }catch(err){
            return res.status(400).send({error_check_user_exist: err.message});
        }
    },

    async delete_user_postages (req, res, next){
        
        try{
            console.log("Removing User's Postages...")

            await Postage.deleteMany({ fk_user_id: req.params.id })

            console.log("User's Postages successfully deleted!\n")

            return next()
        }catch(err){
            return res.status(400).send({error_delete_user_postages: err.message});
        }
    }
}