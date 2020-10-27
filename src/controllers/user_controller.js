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
            const user = await Users.findById(req.params.id);

            if(!user){
                return res.status(400).send({msg: 'Usuário não encontrado'})
            }

            if(!await bcrypt.compare(req.query.password, user.user_password)){
                return res.status(401).send({msg: 'senha invalida'});
            }

            await user.remove();
            return res.status(200).send({msg: 'Usuário deletado com sucesso!'});

        }catch(err){
            return res.status(400).send({msg: err.message});
        }
    },

    async update(req, res){

        try{
            const user = await Users.findById(req.params.id);

            if(!await bcrypt.compare(req.body.password, user.user_password)){
                return res.status(401).send({msg: 'senha invalida'});
            }            
            
            await user.update({user_email: req.body.email, user_name: req.body.nome});

            if(req.body.novaSenha){
                const hash = await bcrypt.hash(req.body.novaSenha, 10);
                await user.update({user_password: hash});
            }

            return res.status(200).send({msg: 'Dados Atualizados com sucesso!'});

        }catch(err){
            return res.status(400).send({error: err.message});
        }
    }
}