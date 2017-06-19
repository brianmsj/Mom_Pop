const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  googleID: {type: Number, required: false},
  twitterId: {type: Number, required: false},
  name: {type: String, required: false},
  accessToken: {type: String, required: false},
  profilePic: {type: String, required: false}
},
{
  timestamps: true
});

const User = mongoose.model('User', UserSchema);


module.exports = User;
