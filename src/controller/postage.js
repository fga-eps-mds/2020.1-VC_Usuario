const express = require('express');

const Postage = require ('../models/postage');

const router = express.Router();

router.post('/an_post', async (req, res) => {

    try{
        const postage = await Postage(req.body);
        console.log(postage);
        return res.status(200).send({postage});
        
    }catch(err){
        return res.status(400).send({ error: 'Deu ruim!'});
    }
});

module.exports = app => app.use('/postage', router);