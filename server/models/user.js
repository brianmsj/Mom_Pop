const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  googleID: {type: Number, required: true},
  name: {type: String, required: true},
  accessToken: {type: String, required: true},
  profilePic: {type: String, required: true}
},
{
  timestamps: true
});

const User = mongoose.model('User', UserSchema);


module.exports = User;
