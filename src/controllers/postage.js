const Postage = require ('../models/postage.js');

module.exports = {
    async an_post (req, res){
        try{
            if(req.file){
                console.log(req.file);
                req.body.midia = req.file.path;
            }
            req.body.fk_id_usuario = null;
            const postage = await Postage.create(req.body);
            console.log(postage);
            return res.status(200).json({postage});
            
        }catch(err){
            return res.status(400).send({ error: err.message});
        }
    },

    async ADMGposts (req, res){
        const posts = await Postage.find();
        return res.json(posts);
    },

    async devdel (req, res){
        const post = await Postage.findById(req.params.id);
        await post.remove();
        return res.send();
    }
}