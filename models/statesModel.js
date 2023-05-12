const mongoose = require('mongoose');

// Define a user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
