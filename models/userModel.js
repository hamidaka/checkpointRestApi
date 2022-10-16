const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: 'noName',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    default: '123abc',
  },
});
module.exports = mongoose.model('user', userSchema);