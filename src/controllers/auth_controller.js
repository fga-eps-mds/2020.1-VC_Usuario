const Users = require('../models/user.js');
const auth_config = require('../config/auth.json');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {

    async find_user(req, res, next) {
        const user = await Users.findById(req.params.id);

        if(!user){
            return res.status(400).send({msg: 'Usuário não encontrado'});
        }

        req.body.user = user;
        return next();
    },

    async password_validation(req, res, next) {
        if(!await bcrypt.compare(req.body.password, req.body.user.user_password)){
            return res.status(401).send({msg: 'senha invalida'});
        }

        return next();
    },

    async password_return(req, res) {
        return res.status(200).send({msg: 'senha validada'});
    },

    async authentication (req, res) {
        const user = await Users.findOne({ user_email: req.body.email });

        if(!user) {
            return res.status(401).send({ msg: 'Usuário não cadastrado.' });
        }

        if(!await bcrypt.compare(req.body.password, user.user_password)){
            return res.status(401).send({msg: 'senha invalida'});
        }

        user.user_password = undefined;

        const token = JWT.sign({ id: user._id }, auth_config.secret, {
            expiresIn: 7200,
        });

        return res.status(200).json({user, token, msg: 'Bem vindo!'})
    },

    async session_authentication (req, res, next) {
        const auth_token = req.headers.authorization;

        if(!auth_token)
            return res.status(401).send({msg: 'Permissão negada'});

        const token_parts = auth_token.split(" ");

        if(token_parts.length != 2)
            return res.status(401).send({msg: 'Algo de errado não está certo'});

        const [ scheme, token ] = token_parts;

        if(!/^Bearer$/i.test(scheme))
            return res.status(401).send({msg: 'Token mal formatado'});

        JWT.verify(token, auth_config.secret, (err, decoded) => {
            if (err) return res.status(401).send({msg: 'Token inválido'});
        
            req.params.id = decoded.id;
            return next();
        });        
    },

    refresh_token_and_data (req, res){

        /**
         * Aqui se deve desenvolver uma lógica para invalidar o token antigo.
         */

        const new_token = JWT.sign({ id: req.params.id }, auth_config.secret, {
            expiresIn: 7200,
        });
        const refreshed_user = req.body.user
        return res.status(200).json({new_token, refreshed_user})
    }
}