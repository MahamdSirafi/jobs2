const mongoose = require('mongoose');
const Message = require('./messageModel');
const Post = require('./postModel');
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
registerSchema.post('findOneAndUpdate', async function (doc) {
  const post = await Post.findById(doc.post).populate({
    path: 'owner',
    select: 'name company',
  });
  switch (doc.status) {
    case 'testing': {
      await Message.create({
        user: doc.user,
        message: `dear ${doc.name} go to testing ${post.job} in ${post.owner.company.name}`,
      });
      break;
    }
    case 'accept': {
      await Message.create({
        user: doc.user,
        message: `dear ${doc.name} you are acceptd for position ${post.job} in ${post.owner.company.name}`,
      });
      break;
    }
    case 'reject': {
      await Message.create({
        user: doc.user,
        message: `dear ${doc.name} you are reject for position ${post.job} in ${post.owner.company.name}`,
      });
      break;
    }
  }
});
const Register = mongoose.model('Register', registerSchema);
module.exports = Register;
