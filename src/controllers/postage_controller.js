const { json } = require('body-parser');
const { update } = require('../models/postage.js');
const Postage = require ('../models/postage.js');
const UPS = require('../models/UPS.js');
const User = require('../models/user.js');

module.exports = {
    async create_common (req, res){
        try{
            if(req.file){
                console.log(req.file);
                req.body.post_midia = `${process.env.APP_HOST}/img/${req.file.filename}`;
            }
            const postage = await Postage.create(req.body);
            console.log(postage);
            return res.status(200).json({postage});
            
        }catch(err){
            return res.status(400).send({ error: err.message});
        }
    },

    async create_anon (req, res){
        try{
            if(req.file){
                console.log(req.file);
                req.body.post_midia = `${process.env.APP_HOST}/img/${req.file.filename}`;
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

    async list_one (req, res){
        const posts = await Postage.findById(req.params.id);
        return res.json(posts);
    },

    async delete (req, res){
        const post = await Postage.findById(req.params.id);
        await post.remove();
        return res.send();
    },

    async delete_all (req, res){
        const post = await Postage.deleteMany({})
        return res.send(post);
    },

    async list_common (req, res){
        try{
            const posts = await Postage.find({ $where: "this.fk_user_id != null" }, { 
                post_category: 0, 
                post_description: 0,
                post_permission: 0
            });
            
            console.log(posts);
            return res.status(200).json({posts});
        }catch(err){
            return res.status(400).send({error: err.message});
        }
    },

    async update_status (req, res){
        try{
          	const post = await Postage.findByIdAndUpdate(req.params.id, req.body.post_status)          
		return res.status(200).json({post});
        }catch(err){
            return res.status(400).send({error: err.message});
        }
    },

    async support_postage (req, res){   

/*         console.log("\n Usuário " + req.params.user_id + " requisitou " + "apoio a postagem " + req.params.postage_id + " \n")
 */        
        console.log(req.body.post_support_number + "\n")
        console.log(req.body.fk_user_id + "\n")
        console.log(req.body.fk_postage_id + "\n")
        console.log(req.body.user_array_UPS + "\n")
        
        try{
            /* const UPS_user = await User.findById(req.body.fk_user_id) */

            let UPS_postage = await Postage.findById(req.body.fk_postage_id.post_support_number)
            console.log(UPS_postage)

            var aux = UPS_postage
            aux = aux + 1
            UPS_postage = aux
            console.log(UPS_postage)

            const aux1 = await Postage.findByIdAndUpdate(req.body.fk_postage_id, UPS_postage)
            console.log(aux1)
            return res.json(aux1)

            /* console.log('entrou1') */
            /* const search_UPS_on_users = await UPS_user.user_array_UPS.UPS.findById(req.body.user_array_UPS) */

            /* var auxFind = 0;  */

            /* console.log("UPSlength: " + UPS.length)
            for (i = 0; i <= UPS.length; i++) {
                console.log('USP:' + i + " | " + UPS[i])
            } */

            /* var query = { fk_user_id: req.body.fk_user_id, fk_postage_id: req.body.fk_postage_id }; */
            /* const aux = await UPS.find({ fk_user_id: req.body.fk_user_id, fk_postage_id: req.body.fk_postage_id })
            console.log("USER: " + aux + "\n") */
            

            /* console.log("tamanho: " + UPS_user.user_array_UPS.length) */
            /* for (i = 0;i < UPS_user.user_array_UPS.length; i++) {
                console.log('USP:' + i + " | " + UPS_user.user_array_UPS[i])
                if(UPS_user.user_array_UPS[i] == req.body.user_array_UPS){
                    console.log('   ESSE:' + i + " | " + UPS_user.user_array_UPS[i])
                    return res.json(UPS_user.user_array_UPS[i])
                    auxFind = 1;
                }
            }

            if(auxFind == 0){
                return res.json("UPS não encontrado")
            } */

            return res.json(UPS_user.user_array_UPS)
        }catch(err){
            return res.status(400).send({error: err.message});
        }
        
        /* try{
            const new_support_postage = req.body

            const result = await Postage.findByIdAndUpdate(req.params.postage_id, new_support_postage)
            if (result == null){
                return res.status(400).send({error: "postagem não encontrada"});
            }
            else{
                console.log("\nApoio a postagem " + req.params.postage_id + " feito com sucesso\n")
                return res.send("Postagem " + req.params.postage_id + " apoiada");
            }
            
        }catch(err){
            return res.status(400).send({error: err.message});
        } */
    }
}
