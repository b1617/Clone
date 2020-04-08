require('../passport');
const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user.controllers.js');
const router = express.Router();

const passportAuth = (strategy) =>
  passport.authenticate(strategy, { session: false });

router.get('/', passportAuth('jwt'), (req, res) => {
  res.send('Hello world');
});
router.post('/signin', passportAuth('local'), userController.signIn);
router.post('/signup', userController.signUp);
// router.post('/signout', )
module.exports = router;
