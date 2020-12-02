const Users = require('../models/user.js');
const auth_config = require('../config/auth.json');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {

    async password_validation(req, res, next) {
        try{
            if(!await bcrypt.compare(req.body.password, req.user.user_password)){
                return res.status(401).send({msg: 'Senha Invalida'});
            }
    
            return next();
        }catch(err){
            return res.status(400).send({error_password_validation: err.message});
        }
    },

    async password_return(req, res) {
        try{
            return res.status(200).send({msg: 'Senha Validada'});
        }catch(err){
            return res.status(400).send({error_password_return: err.message});
        }
    },

    async authentication (req, res) {
        try{
            const user = await Users.findOne({ user_email: req.body.email });

            if(!user) {
                return res.status(401).send({ msg: 'Usuário não cadastrado.' });
            }

            if(!await bcrypt.compare(req.body.password, user.user_password)){
                return res.status(401).send({msg: 'Senha Invalida'});
            }

            user.user_password = undefined;

            const token = JWT.sign({ id: user._id }, auth_config.secret, {
                expiresIn: 7200,
            });

            return res.status(200).json({user, token, msg: 'Bem Vindo!'})
        }catch(err){
            return res.status(400).send({error_authentication: err.message});
        }
    },

    async session_authentication (req, res, next) {
        try{
            const auth_token = req.headers.authorization;

            if(!auth_token)
                return res.status(401).send({msg: 'Permissão Negada'});

            const token_parts = auth_token.split(" ");

            if(token_parts.length != 2)
                return res.status(401).send({msg: 'Erro numero de tokens'});

            const [ scheme, token ] = token_parts;

            if(!/^Bearer$/i.test(scheme))
                return res.status(401).send({msg: 'Token mal formatado'});

            JWT.verify(token, auth_config.secret, (err, decoded) => {
                if (err) return res.status(401).send({msg: 'Token Inválido'});
            
                req.params.id = decoded.id;
                
                return next();
            });
        }catch(err){
            return res.status(400).send({error_session_authentication: err.message});
        }        
    },

    refresh_token_and_data (req, res){
        try{
            const new_token = JWT.sign({ id: req.params.id }, auth_config.secret, {
                expiresIn: 7200,
            });

            const refreshed_user = req.user

            return res.status(200).json({new_token, refreshed_user})
        }catch(err){
            return res.status(400).send({error_refresh_token_and_data: err.message});
        }
    }
}