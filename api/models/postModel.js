const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  owner : {
      required : [true , 'must enter owner'],
type : mongoose.Schema.ObjectId,
ref : 'User'
    },
    job : {
      required : [true , 'must enter job'],
type : String,
    },
    skilles : {
      required : [true , 'must enter skilles'],
type : Array,
    },
    description : {
      required : [true , 'must enter description'],
type : String,
    },
    test : {
      required : [true , 'must enter test'],
type : String,
    },
    
},{
      timestamps: true
    });
    const Post = mongoose.model("Post", postSchema);
    module.exports = Post;
    