const HttpStatus = require('http-status-codes');
const userService = require('../services/user.services');
const jwt = require('../jwt');

function signIn(req, res) {
  const user = req.user;
  const tokens = jwt.createTokens(user);
  res.status(HttpStatus.OK).json({ user, tokens });
}

function signUp(req, res) {
  userService
    .create(req.body)
    .then((user) => {
      return res.status(HttpStatus.OK).json(user);
    })
    .catch((err) => {
      return res.status(HttpStatus.NOT_ACCEPTABLE).json(err);
    });
}

module.exports = {
  signIn,
  signUp
};
