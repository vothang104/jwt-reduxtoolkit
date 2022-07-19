const authController = require('../controllers/authController');
const middleWareController = require('../controllers/middleWareController')

const router = require('express').Router();

// register
router.post('/register', authController.registerUser);
// login
router.post('/login', authController.loginUser);
// refresh
router.post('/refresh', authController.requestRefreshToken);
// logout
router.post('/logout', middleWareController.verifyToken, authController.logoutUser)

module.exports = router