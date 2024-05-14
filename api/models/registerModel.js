const mongoose = require('mongoose');
const registerSchema = new mongoose.Schema(
  {
    name: {
      required: [true, 'must enter name'],
      type: String,
    },
    email: {
      required: [true, 'must enter email'],
      type: String,
    },
    cv: {
      required: [true, 'must enter cv'],
      type: String,
    },
    result: {
      required: [true, 'must enter result'],
      type: Number,
    },
    status: {
      type: String,
      enum: ['waiting', 'testing', 'accept', 'reject'],
      default: 'waiting',
    },
    user: {
      required: [true, 'must enter user'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    post: {
      required: [true, 'must enter post'],
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Register = mongoose.model('Register', registerSchema);
module.exports = Register;
