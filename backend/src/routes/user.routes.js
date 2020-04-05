const express = require('express');
const userController = require('../controllers/user.controllers.js');
const router = express.Router();

router.post('/signin', userController.signIn);
router.post('/signup', userController.signUp);

module.exports = router;
