const Users = require('../models/user.js');

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

    async list (req, res){
        const users = await Users.find();
        return res.json(users);
    },

    async delete(req, res){
        const user = await Users.findById(req.params.id);
        try{
            await user.remove();
            return res.status(200).send({msg: 'Usuário deletado com sucesso!'}); 
        }catch(err){
            return res.status(400).send({msg: err.message});
        }
    }
}