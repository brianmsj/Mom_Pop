const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bearer = require('../auth/bearer');
const passportGoogle = require('../auth/google');
const bodyParser = ('body-parser');


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
    passportGoogle.authenticate('bearer', {session: false}),
    (req, res) => res.json(req.user)
);

router.get('/logout', (req, res) => {
    req.logout();
    res.clearCookie('accessToken');
    res.redirect('/');
});



module.exports = router;
