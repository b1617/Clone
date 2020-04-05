const HttpStatus = require('http-status-codes');

signIn = (req, res) => {
  // need to create token and refresh token
  res.status(HttpStatus.OK).json({});
};

signUp = (req, res) => {
  userService
    .create(req.body)
    .then((user) => {
      return res.status(HttpStatus.OK).json(user);
    })
    .catch((err) => {
      return res.status(HttpStatus.NOT_ACCEPTABLE).json(err);
    });
};

module.exports = {
  signIn,
  signUp,
};
