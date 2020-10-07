const router = require('express').Router();
const multer = require('multer');
const Postage = require('./controllers/postage');
const multerConfig = require('./config/multer');

router.post('/postage/create_anon', multer(multerConfig).single("file"), Postage.create_anon);
router.post('/postage/create_common', multer(multerConfig).single("file"), Postage.create_common);
router.get('/postage/list_all', Postage.list);
router.get('/postage/list_common', Postage.list_common);
router.delete('/postage/delete/:id', Postage.delete);
router.delete('/postage/delete_all', Postage.delete_all);
router.put('/postage/update_status/:id', Postage.update_status);
router.get('/postage/list_one/:id', Postage.list_one);

module.exports = router;
