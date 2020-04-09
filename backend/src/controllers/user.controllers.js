const HttpStatus = require('http-status-codes');
const userService = require('../services/user.services');
const jwt = require('../jwt');
const redis = require('../config/redis');

function signIn(req, res) {
  const user = req.user;
  const tokens = jwt.createTokens(user);
  redis.set(user.id, tokens.refreshToken);
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

function signOut(req, res) {
  redis.remove(req.params.id);
  return res.sendStatus(HttpStatus.OK);
}

module.exports = {
  signIn,
  signUp,
  signOut
};
