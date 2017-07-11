const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const rp = require('request-promise-native');
const bearer = require('../auth/bearer');
const passport = require('passport');
const passportGoogle = require('../auth/google');
const JobPost = require ('../models/jobpost');
const User = require ('../models/user');
const jwt = require('jwt-simple')
const zipcodes = require('zipcodes')


mongoose.Promise = global.Promise;



router.post('/jobpost', passport.authenticate('bearer', {session: false}), (req, res) => {

  const jobPostDetails = {
    createdBy: req.user._id,
    title: req.body.title,
    category: req.body.category,
    pay: req.body.pay,
    images: req.body.images,
    description: req.body.description,
    zipcode: req.body.zipcode
  };

  const options = {
    uri: `https://www.zipcodeapi.com/rest/${global.secret.ZIPCODE_API_KEY}/info.json/${req.body.zipcode}/degrees`,
    json: true
  };

  rp(options)
    .then(response => {
      jobPostDetails.geometry = {coordinates: [response.lng, response.lat]};
      return JobPost.create(jobPostDetails);
    })
    .then(listing => {
      res.status(200).json({listing});
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err: err});
    });
});

router.get('/myjobposts', passportGoogle.authenticate('bearer', {session: false}), (req, res) => {

  const query = {
    createdBy: {$eq: req.user._id}
  };

  JobPost
    .find(query)
    .exec()
    .then(listings => {
      listings.length > 0 ? res.json(listings) : res.json({message: `You Haven't Posted Any Jobs Yet`});
    })
    .catch(err => {
      res.status(500).json({error: 'something went wrong'});
    });

});

function showZips(zipcodes) {

}

router.get('/jobposts/:zipcode',passport.authenticate('bearer', {session: false}), (req, res) => {
  var nearby = zipcodes.radius(req.params.zipcode,5)
  JobPost
    .find()
    .exec()
    .then(
      listings=> {
      var listingZips=[]
      for(let i=0;i<listings.length;i++) {
        for(let j=0;j<nearby.length;j++) {
          if(listings[i].zipcode == nearby[j]) {
            listingZips.push(listings[i])
        }
      }
    }
       res.json(listingZips)
    })
    .catch(err => {
      res.status(500).json({error: 'something went wrong'});
    });
});
//
router.get('/jobposts/:createdBy', (req, res) => {
  JobPost
    .find({createdBy: req.params.createdBy})
    .populate({
      path: 'createdBy',
      select: 'name profilePic'
    })
    .exec()
    .then(listing => {
      res.json(listing);
    })
    .catch(err => {
      res.status(500).json({error: 'something went wrong'});
    });
});
//
router.get('/jobposting/:id', (req, res) => {
  JobPost
    .find({_id: req.params.id})
    .populate({
      path: 'createdBy',
      select: 'name profilePic'
    })
    .exec()
    .then(listing => {
      res.json(listing);
    })
    .catch(err => {
      res.status(500).json({error: 'something went wrong'});
    });
});
//
router.delete('/jobposter/:createdBy/:id', passportGoogle.authenticate('bearer', {session: false}),
  (req, res) => {
    JobPost
      .findByIdAndRemove(req.params.id)
      .exec()
      .then(() => {
        res.status(200).json({message: 'success'});
      })
      .catch(err => {
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

router.post('/localuser', (req, res) => {
    let email = req.body.email
    User
    .find({email})
    .count()
    .exec()
    .then(count => {
      if (count > 0) {
        return res.status(422).json({message: 'e-mail already taken'});
      }
      // if no existing user, hash password
      return User.hashPassword(req.body.password)
    })
    .then(hash => {
      return User
        .create({
          password: hash,
          email: req.body.email,
          accessToken: jwt.encode(req.body.email,hash,'HS512')
        })
    })
    .then(user => {
      return res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({message: 'Internal server error'})
    });
});
//
// router.put('/listing/:createBy/:id', passportGoogle.authenticate('bearer', {session: false}),
//   (req, res) => {
//     if(!(req.params.id && req.body._id && req.params.id === req.body._id)) {
//       res.status(400).json({
//         error:'Request path id and request body id values must match'
//       });
//     }
//     const updated = {};
//     const canBeUpdated = ['title', 'price', 'categories', 'images'];
//     canBeUpdated.forEach(field => {
//       if (field in req.body) {
//         updated[field] = req.body[field];
//       }
//     });
//
//     Listing
//       .findByIdAndUpdate(req.params.id, {$set: updated}, {new: true})
//       .exec()
//       .then(updatedListing => res.status(201).json(updatedListing))
//       .catch(err => res.status(500).json({message: 'Something went wrong'}));
// });
//
//
//
//



module.exports = router;
