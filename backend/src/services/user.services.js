const User = require('../models/user.models');

getByEmail = (email) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email })
      .then((user) => {
        resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

create = (params) => {
  return new Promise((resolve, reject) => {
    const email = params.email;
    getByEmail(email)
      .then((user) => {
        if (user) {
          reject(new Error('User already exists'));
        }
      })
      .then(() => new User(params).save())
      .then((user) => {
        resolve(user);
      })
      .catch((err) => reject(err));
  });
};
