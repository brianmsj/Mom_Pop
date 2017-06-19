const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport')
const bearer = require('../auth/bearer');
const passportGoogle = require('../auth/google');
const passportBasic = require('../auth/local');
const passportTwitter = require('../auth/twitter');
const expressPassport = require('passport');
const bodyParser = ('body-parser');
const session = require('express-session')


mongoose.Promise = global.Promise;

router.get('/google',
    passportGoogle.authenticate('google', {scope: ['profile']}));

router.get('/google/callback',
    passportGoogle.authenticate('google', {
      failureRedirect: '/',
      session: false
    }),
    (req, res) => {
      res.cookie('accessToken', req.user.accessToken, {expires: 0});
      res.redirect('/');
    }
);

router.get('/me',
    passport.authenticate('bearer', {session: false}),
    (req, res) => res.json(req.user)
);

router.get('/logout', (req, res) => {
    req.logout();
    res.clearCookie('accessToken');
    res.redirect('/');
});

router.get('/local',
    passportBasic.authenticate('local',{scope: ['username','profile']}));

router.get('/local/callback',
    passportBasic.authenticate('local', {
      failureRedirect: '/',
      session: false
    }),
    (req, res) => {
      res.cookie('accessToken', req.user.accessToken, {expires: 0});
      res.redirect('/');
    }
);
router.get('/twitter',
    passportTwitter.authenticate('twitter', {scope: ['profile']}));

router.get('/twitter/callback',
    passportTwitter.authenticate('twitter', {
      failureRedirect: '/',
      session: false
    }),
    (req, res) => {
      res.cookie('accessToken', req.user.accessToken, {expires: 0});
      res.redirect('/');
    }
);





module.exports = router;
