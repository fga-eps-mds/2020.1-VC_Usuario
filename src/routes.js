const router = require('express').Router();
const multer = require('multer');
const Postage = require('./controllers/postage');
const multerConfig = require('./config/multer');

router.post('/an_post', multer(multerConfig).single("file"), Postage.an_post);

module.exports = router;