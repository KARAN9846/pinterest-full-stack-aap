const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/pinapp")

// Define the user schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String,
    default: 'default_dp.jpg' // You can set a default image if needed
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  }
});

// Create the User model
module.exports = mongoose.model('User', userSchema);


