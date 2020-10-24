const router = require('express').Router();
const multer = require('multer');
const Postage = require('./controllers/postage_controller');
const User = require('./controllers/user_controller')
const multerConfig = require('./config/multer');
const Auth = require('./controllers/auth_controller');

//Postages routes
router.post('/postage/create_anon', multer(multerConfig).single("file"), Postage.create_anon);
router.post('/postage/create_common', multer(multerConfig).single("file"), Postage.create_common);
router.get('/postage/list_all', Postage.list);
router.get('/postage/list_common', Postage.list_common);
router.delete('/postage/delete/:id', Postage.delete);
router.delete('/postage/delete_all', Postage.delete_all);
router.put('/postage/update_status/:id', Postage.update_status);
router.get('/postage/list_one/:id', Postage.list_one);

//Users routers
router.post('/user/register_user', User.register);
router.get('/user/list_all', User.list);
// Auth.session_authentication, User.list
router.post('/user/login', Auth.authentication);
router.get('/user/validate_session', Auth.session_authentication, Auth.refresh_token);
router.get('/user/list_postages/:id', User.list_postages);

module.exports = router;