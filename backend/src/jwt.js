const jwt = require('jsonwebtoken');

function createAccessToken(user) {
  return jwt.sign({ sub: user.id }, process.env.JWT_ACCESS_KEY, {
    expiresIn: '30s'
  });
}

function createRefreshToken(user) {
  return jwt.sign(
    {
      sub: user.id,
      iat: new Date().getTime()
    },
    process.env.JWT_REFRESH_KEY,
    { expiresIn: '1d' }
  );
}

function createTokens(user) {
  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);
  return { accessToken, refreshToken };
}

function isValidToken(token, key) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, key, (err, result) => {
      console.log(result);
      if (err || !result) {
        reject(err);
      }
      return resolve(result);
    });
  });
}

module.exports = {
  createAccessToken,
  createRefreshToken,
  createTokens,
  isValidToken
};
