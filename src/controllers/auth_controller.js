const Users = require('../models/user.js');
const auth_config = require('../config/auth.json');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    async authentication (req, res) {
        //const {user_email, user_password} = req.body

        const user = await Users.findOne({ user_email: req.body.email })
        console.log(user);

        if(!user) {
            return res.status(500).send({ msg: 'Usuário não cadastrado.' })
        }

        if(!await bcrypt.compare(req.body.password, user.user_password)){
            return res.status(500).send({ msg: 'Senha inválida.' })
        }

        user.user_password = undefined

        const token = JWT.sign({ id: user._id}, auth_config.secret, {
            expiresIn: 7200,
        });

        res.status(200).json({user, token})
    }
}