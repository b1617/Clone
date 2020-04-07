const passport = require('passport');
const User = require('./models/user.models');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_KEY
    },
    (payload, done) => {
      User.findById(payload.sub)
        .then((user) => {
          if (!user) {
            return done(null, null);
          }
          return done(null, user);
        })
        .catch((err) => {
          return err, null;
        });
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    (email, password, done) => {
      User.findOne({ email })
        .select('+password')
        .then((user) => {
          console.log(user);
          if (!user) {
            return done(null, null);
          }
          bcrypt.compare(password, user.password).then((isValid) => {
            if (!isValid) {
              return done(null, null);
            }
            return done(null, user);
          });
        })
        .catch((err) => {
          return done(err, null);
        });
    }
  )
);
