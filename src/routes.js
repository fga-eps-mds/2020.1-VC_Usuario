const router = require('express').Router();
const multer = require('multer');
const Postage = require('./controllers/postage');
const multerConfig = require('./config/multer');

router.post('/postage/create_anon', multer(multerConfig).single("file"), Postage.create_anon);
router.get('/postage/list_all', Postage.list);
router.delete('/postage/delete/:id', Postage.delete);

module.exports = router;
