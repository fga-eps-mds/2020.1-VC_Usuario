const Postage = require ('../models/postage.js');

module.exports = {
    async an_post (req, res){
        try{
            console.log(req.file);
            req.body.fk_id_usuario = null;
            const postage = await Postage.create(req.body);
            console.log(postage);
            return res.status(200).json({postage});
            
        }catch(err){
            return res.status(400).send({ error: err.message});
        }
    }
}

