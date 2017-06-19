const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const User = require('../models/user');

const database = {
    DATABASE_URL: global.secret.DATABASE_URL
};

passport.use(
  new TwitterStrategy({
    consumerKey: global.secret.TWITTER_KEY,
    consumerSecret: global.secret.TWITTER_SECRET,
    callbackURL: `/api/auth/twitter/callback`
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log(profile)
    const user = database[accessToken] = {
      twitterId: profile.id,
      accessToken: accessToken
    };

    const searchQuery = {
      twitterId: profile.id,
    };

    const updates = {
      name: profile.displayName,
      accessToken: accessToken,
      twitterId: profile.id,
      profilePic: profile.photos[0].value,
    };

    const options = {
      upsert: true,
      new: true
    };
    User.findOneAndUpdate(searchQuery, {$set: updates}, options, (err, user) => {
      if (err) {
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
