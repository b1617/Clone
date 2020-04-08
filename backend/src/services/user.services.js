const User = require('../models/user.models');
const jwt = require('../jwt');

function getByEmail(email) {
  return new Promise((resolve, reject) => {
    User.findOne({ email })
      .then((user) => resolve(user))
      .catch((err) => reject(err));
  });
}

function create(params) {
  console.log('create with', params);
  return new Promise((resolve, reject) => {
    const email = params.email;
    getByEmail(email)
      .then((user) => {
        if (user) return Promise.reject('User already exists');
      })
      .then(() => new User(params).save())
      .then((user) => {
        const tokens = jwt.createTokens(user);
        resolve({ user, tokens });
      })
      .catch((err) => reject(err));
  });
}

module.exports = {
  create
};
