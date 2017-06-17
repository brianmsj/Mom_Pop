const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema ({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
});

const JobSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  pay: {
    type: Number,
    required: false
  },
  images: {
    type: Array,
  },
  zipcode: {
    type: Number,
    required: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  geometry: GeoSchema
},
{
  timestamps: true
});

const JobPost = mongoose.model('JobPost', JobSchema);

module.exports = JobPost;
