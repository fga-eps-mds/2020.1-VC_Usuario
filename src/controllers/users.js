const Users = require('../models/user.js');

module.exports = {
    async register(req, res){
        const { user_email } = req.body;
        try{
            if (await Users.findOne({ user_email }))
                return res.status(400).send({ error: 'Email já cadastrado'})

            const User = await Users.create(req.body);
            console.log(User); 
            return res.status(200).json({User});
        }catch(err){
            return res.status(400).send({ error: err.message});
        }

    },

    async list_all (req, res){
        const users = await Users.find();
        return res.json(users);
    }
}