const router = require('express').Router();
const multer = require('multer');
const Postage = require('./controllers/postage');
const multerConfig = require('./config/multer');

router.post('/an_post', multer(multerConfig).single("file"), Postage.an_post);
router.get('/ADMGposts', Postage.ADMGposts );
router.get('/postage_unique/:id', Postage.postage_unique);
router.delete('/delDev/:id', Postage.devdel);

module.exports = router;