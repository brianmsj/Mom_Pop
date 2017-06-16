const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const mongoose = require('mongoose');
const User = require('../models/user');
mongoose.promise = global.promise;

passport.use(
    new BearerStrategy(
        (token, done) => {
            User.findOne({accessToken: token})
                .then(user => {
                    return done(null, user);
                })
                .catch(err => {
                    return done(null, false);
                });
            }
    )
);

module.exports = passport;
