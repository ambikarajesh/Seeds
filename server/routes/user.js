const express = require('express');
const userController = require('../controllers/user');
const authMiddleware = require('../middleware/auth');
const router = express.Router();


router.post('/register', userController.postRegister);
router.post('/login', userController.postLogin);
router.get('/logout', authMiddleware, userController.getLogout);

router.post('/fb_login', userController.postFaceBookLogin);
router.post('/goo_login', userController.postGoogleLogin);


router.post('/pwd_reset', userController.postPwdReset);
module.exports = router;


