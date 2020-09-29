const router = require('express').Router();
const Postage = require('./controllers/postage');

router.post('/an_post', Postage.an_post);

module.exports = router;