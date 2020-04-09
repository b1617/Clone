const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');
const jwt = require('../jwt');

router.post('/', (req, res) => {
  const { refreshToken, userId } = req.body;
  jwt
    .isValidToken(refreshToken, process.env.JWT_REFRESH_KEY)
    .then((result) => {
      if (result.sub === userId) {
        const accessToken = jwt.createAccessToken({ id: userId });
        res.status(HttpStatus.OK).json({ accessToken });
      }
      res.sendStatus(HttpStatus.NOT_FOUND);
    })
    .catch((err) => {
      res.status(HttpStatus.UNAUTHORIZED).json(err);
    });
});

module.exports = router;
