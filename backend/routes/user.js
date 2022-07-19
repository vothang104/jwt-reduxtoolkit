

const router = require('express').Router();
const middleWareController = require('../controllers/middleWareController');
const userController = require('../controllers/userController')

// get all users
router.get('/', middleWareController.verifyToken, userController.getAllUser);
// delete
router.delete('/:id', middleWareController.verifyTokenAndAdminAuth, userController.deleteUser);

module.exports = router