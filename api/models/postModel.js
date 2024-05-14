const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
  {
    owner: {
      required: [true, 'must enter owner'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    job: {
      required: [true, 'must enter job'],
      type: String,
    },
    skilles: {
      required: [true, 'must enter skilles'],
      type: Array,
    },
    description: {
      required: [true, 'must enter description'],
      type: String,
    },
    test: {
      questions: [
        {
          question: {
            required: [true, 'must enter questions'],
            type: String,
          },
          A: {
            required: [true, 'must enter a'],
            type: String,
          },
          B: {
            required: [true, 'must enter b'],
            type: String,
          },
          C: {
            required: [true, 'must enter c'],
            type: String,
          },
          D: {
            required: [true, 'must enter d'],
            type: String,
          },
          answer: {
            required: [true, 'must enter answer'],
            type: String,
          },
        },
      ],
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
