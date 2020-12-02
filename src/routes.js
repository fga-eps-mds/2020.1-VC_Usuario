const router = require('express').Router();
const multer = require('multer');
const Postage = require('./controllers/postage_controller');
const User = require('./controllers/user_controller')
const multerConfig = require('./config/multer');
const Auth = require('./controllers/auth_controller');
const UPS = require('./controllers/UPS_controller');
const UPC = require('./controllers/UPC_controller');

//Postages routes
router.post('/postage/create_anon', multer(multerConfig).single("file"), Postage.create_postage, Postage.create_anon);
router.post('/postage/create_common', multer(multerConfig).single("file"), User.check_user_exist, Postage.create_postage, Postage.create_common);
router.get('/postage/list_all', Postage.list);
router.get('/postage/list_common', Postage.list_common);
router.get('/postage/list_by_category', Postage.list_by_category);
router.get('/postage/list_UPC/:id', Postage.list_UPCs_by_postage);
router.get('/postage/list_one/:id', Postage.list_one);
router.get('/postage/list_one_logged/:postage_id/:id', User.find_user, Postage.list_one_logged, Postage.take_ups_of_postages);
router.get('/postage/list_all_with_UPS/:id', User.find_user, Postage.list_common_postages, Postage.take_ups_of_postages);
router.put('/postage/update_status/:id', Postage.update_status);
router.put('/postage/delete_one', Postage.check_postage_exist, User.check_user_exist, Postage.check_postage_is_not_anon, Postage.check_user_of_postage, Postage.delete_postage_UPSs, Postage.delete_postage_UPCs, Postage.delete_postage);
router.put('/postage/update_one', Postage.check_postage_exist, User.check_user_exist, Postage.check_postage_is_not_anon, Postage.check_user_of_postage, Postage.update_postage);

//Users routers
router.post('/user/register_user', User.register);
router.get('/user/list_postages/:id', User.find_user, User.list_user_postages, Postage.take_ups_of_postages);
router.put('/user/update/:id', User.update, User.update_user_postages_author);
router.delete('/user/delete/:id', User.find_user, User.delete_user_UPSs, User.delete_user_UPCs, User.delete_user_postages, User.delete);

//Auth routers
router.post('/user/login', Auth.authentication);
router.get('/user/validate_session', Auth.session_authentication, User.find_user, Auth.refresh_token_and_data);
router.put('/user/change_password/:id', User.find_user, User.change_password);

//UPS routers
router.post('/ups/support_postage', Postage.check_postage_exist, User.check_user_exist, Postage.check_postage_is_not_anon, UPS.support_postage, UPS.post_support_number_alteration);

//UPC routers
router.post('/upc/comment_postage', Postage.check_postage_exist, User.check_user_exist, Postage.check_postage_is_not_anon, UPC.comment_postage)

//Tests routers
router.post('/ups/create', UPS.create_ups);
router.get('/user/list_all', User.list);
router.get('/ups/list_all', UPS.list_all);
router.get('/upc/list_all', UPC.list_all);
router.delete('/postage/delete_all', Postage.delete_all);
router.delete('/user/delete_all', User.delete_all);
router.delete('/ups/delete_all', UPS.delete_all);
router.delete('/upc/delete_all', UPC.delete_all);

module.exports = router;