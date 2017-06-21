const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy;


passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.authenticate(email, password, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, { message: 'Invalid email or password.' });
      }

      return done(null, user);
    });
  }
));


module.exports = passport;
