const express = require('express')
const router = express.Router();
const userController = require('../controllers/user_controller')
const{profile} = require('../controllers/profile_controller')


router.get('/login',userController.login)
router.get('/signup',userController.signup)
router.post('/createUser',userController.createUser)
router.post('/authenticate',userController.authenticateUser)
router.get('/destroy',userController.destroy)
router.get('/profile/:id',profile)

module.exports = router;