const Users = require('../models/user.js');
const auth_config = require('../config/auth.json');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    async authentication (req, res) {

        const user = await Users.findOne({ user_email: req.body.email })

        if(!user) {
            return res.status(401).send({ msg: 'Usuário não cadastrado.' })
        }

        if(!await bcrypt.compare(req.body.password, user.user_password)){
            return res.status(401).send({msg: 'senha invalida'})
        }

        user.user_password = undefined

        const token = JWT.sign({ id: user._id}, auth_config.secret, {
            expiresIn: 7200,
        });

        console.log(token)

        res.status(200).json({user, token, msg: 'Bem vindo!'})
    },

    async session_authentication (req, res, next) {
        const auth_token = req.headers.autorization;

        if(!auth_token)
            res.status(401).send({msg: 'Permissão negada'});

        const token_parts = auth_token.split(" ");

        if(token_parts.length != 2)
            res.status(401).send({msg: 'Algo de errado não está certo'});

        const [ scheme, token] = token_parts;

        if(!/^Bearer$/i.test(scheme))
            res.status(401).send({msg: 'Token mal formatado'});

        JWT.verify(token, auth_config.secret, (err, decoded) => {
            if (err) return res.status(401).send({error: 'Token inválido'});
        
            req.user_id = decoded.id;
            return next();
        });        
    },
}