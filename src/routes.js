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
router.post('/postage/create_common', multer(multerConfig).single("file"), Postage.create_postage, Postage.create_common);
router.get('/postage/list_all', Postage.list);
router.get('/postage/list_common', Postage.list_common);
router.get('/postage/list_by_category', Postage.list_by_category);
router.get('/postage/list_one/:id', Postage.list_one);
router.get('/postage/list_one_logged/:postage_id/:user_id', Postage.list_one_logged);
router.get('/postage/list_all_with_UPS/:id', Postage.list_common_postages, Postage.take_ups_of_postages);
router.delete('/postage/delete_for_test/:id', Postage.delete_one_for_test);
router.delete('/postage/delete_all', Postage.delete_all);
router.put('/postage/update_status/:id', Postage.update_status);
router.put('/postage/delete_one', UPS.check_exist_user_and_postage, Postage.check_postage_is_not_anon, Postage.check_user_of_postage, Postage.delete_one);
router.put('/postage/update_one', UPS.check_exist_user_and_postage, Postage.check_postage_is_not_anon, Postage.check_user_of_postage, Postage.update_one);
router.get('/postage/list_UPC/:id', Postage.list_UPCs_by_postage);
router.post('/postage/report_postage', UPS.check_exist_user_and_postage, Postage.report_postage, Postage.postage_report_number_alteration);

//Users routers
router.post('/user/register_user', User.register);
router.put('/user/update/:id', User.update);
router.get('/user/list_all', User.list);

// Auth.session_authentication, User.list
router.post('/user/login', Auth.authentication);
router.get('/user/validate_session', Auth.session_authentication, Auth.find_user, Auth.refresh_token_and_data);
router.get('/user/list_postages/:id', User.list_user_postages, Postage.take_ups_of_postages);
router.delete('/user/delete_all', User.delete_all);
router.delete('/user/delete/:id', Auth.find_user, User.delete);
router.put('/user/change_password/:id', Auth.find_user, User.change_password);

//UPS routers
router.post('/ups/create', UPS.create_ups);
router.get('/ups/list_all', UPS.list_all);
router.delete('/ups/delete_all', UPS.delete_all);
router.put('/ups/support_postage', UPS.check_exist_user_and_postage, UPS.support_postage, UPS.post_support_number_alteration);

//UPC routers
router.post('/upc/comment_postage', UPS.check_exist_user_and_postage, UPC.comment_postage)
router.get('/upc/list_all', UPC.list_all);
router.delete('/upc/delete_all', UPC.delete_all);

module.exports = router;