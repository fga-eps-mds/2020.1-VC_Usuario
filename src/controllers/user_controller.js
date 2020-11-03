const Users = require('../models/user.js');
const bcrypt = require('bcrypt')

module.exports = {
    
    async register(req, res){
        const { user_email } = req.body;
        try{
            if (await Users.findOne({ user_email }))
                return res.status(400).send({ msg: 'Email já cadastrado'})

            const User = await Users.create(req.body);
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
            console.log('senha', req.body.novaSenha)
            if(req.body.novaSenha){
                const hash = await bcrypt.hash(req.body.novaSenha, 10);
                await user.update({user_password: hash});
            }

            return res.status(200).send({msg: 'Senha Atualizados com sucesso!'});
        }catch(err){
            return res.status(400).send({msg: err.message});
        }
    },

    async delete_all (req, res){
        const users = await Users.deleteMany({})
        return res.send(users);
    },
}