const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy;

const database = {
    DATABASE_URL: global.secret.DATABASE_URL
};

passport.use(
  new LocalStrategy({
    usernameField: 'brianmsj',
    passwordField: 'lansford2',
    callbackURL: `/api/auth/local/callback`
  },
  (accessToken, refreshToken, username, password, cb) => {
    console.log(username)

    const user = database[accessToken] = {
      username: username,
      password: password,
      accessToken: accessToken
    };

    const searchQuery = {
      username: username
    };

    const updates = {
      username: username,
      accessToken: accessToken,
      password: password,
    };

    const options = {
      upsert: true,
      new: true
    };
    User.findOneAndUpdate(searchQuery, {$set: updates}, options, (err, user) => {
      if (err) {
        console.log('hi')
        console.log(err);
        return cb(err);
      }
      else {
        return cb(null, user);
      }
    });
  })
);

module.exports = passport;
