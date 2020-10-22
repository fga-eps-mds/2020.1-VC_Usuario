const UPS = require ('../models/UPS.js');
const Postage = require ('../models/postage.js');
const { search } = require('../routes.js');

module.exports = {

    async create_ups (req, res){
        console.log("entrou")

        try {
            console.log("entrou1")
            /* console.log(req.body.UPS_id, req.body.fk_user_id, req.body.fk_postage_id);  */

            const ups = await UPS.create(req.body);

            console.log("entro2")
            console.log(ups);
            console.log("entro3")
            return res.status(200).json(ups);

        } catch(error){
            return res.status(400).send({ error: err.message});
        }
    },

    async list_all (req, res){
        const ups = await UPS.find();
        return res.json(ups);
    },
}