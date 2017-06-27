const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
mongoose.Promise = global.Promise

const UserSchema = mongoose.Schema({
  googleID: {type: Number, required: false},
  twitterId: {type: Number, required: false},
  name: {type: String, required: false},
  accessToken: {type: String, required: false},
  profilePic: {type: String, required: false},
  email: {type: String, required: false},
  password: {type: String, required: false},
  education: {type: String, required: false},
  experience: {type: String, required: false}


},
{
  timestamps: true
});

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
}
UserSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10)
}
const User = mongoose.model('User', UserSchema);


module.exports = User;
