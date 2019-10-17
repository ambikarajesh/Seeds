const express = require('express');
const userController = require('../controllers/user');
const authMiddleware = require('../middleware/auth');
const router = express.Router();


router.post('/user_register', userController.postRegister);
router.post('/user_login', userController.postLogin);
router.get('/user_logout', authMiddleware, userController.getLogout);

router.post('/user_fb_login', userController.postFaceBookLogin);
router.post('/user_goo_login', userController.postGoogleLogin);


router.post('/user_pwd_reset', userController.postPwdReset);
router.post('/user_new_pwd_set', userController.postNewPwdSet);
module.exports = router;


