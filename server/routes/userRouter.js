const Router = require('express')
const router = new Router()
const userContoller = require('../controllers/userController')


router.post('/user-create', userContoller.createUser);
router.post('/user-login', userContoller.loginUser);
router.post('/user-token', userContoller.protectedRoute);

module.exports = router