const Users = require('../models/user.js');

module.exports = {
    async register(req, res){
        const { user_email } = req.body;
        try{
            if (await Users.findOne({ user_email }))
                return res.send({ msg: 'Email já cadastrado'})

            const User = await Users.create(req.body);
            console.log(User.user_email, User.user_name, User.user_id); 
            return res.status(200).send({User, msg: 'Cadastro feito com sucesso!'});
        }catch(err){
            return res.status(400).send({ error: err.message});
        }

    },

    async list (req, res){
        const users = await Users.find();
        return res.json(users);
    }
}