const Postage = require ('../models/postage.js');

module.exports = {
    async create_anon (req, res){
        try{
            if(req.file){
                console.log(req.file);
                req.body.post_midia = req.file.path;
            }
            req.body.fk_user_id = null;
            const postage = await Postage.create(req.body);
            console.log(postage);
            return res.status(200).json({postage});
            
        }catch(err){
            return res.status(400).send({ error: err.message});
        }
    },

    async list (req, res){
        const posts = await Postage.find();
        return res.json(posts);
    },

    async delete (req, res){
        const post = await Postage.findById(req.params.id);
        await post.remove();
        return res.send();
    }
}
