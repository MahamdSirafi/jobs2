const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
  jop : {
      required : [true , 'must enter jop'],
type : String,
    },
    skilles : {
      required : [true , 'must enter skilles'],
type : String,
    },
    description : {
      required : [true , 'must enter description'],
type : String,
    },
    test : {
      required : [true , 'must enter test'],
type : mongoose.Schema.ObjectId,
ref : 'ghvghv'
    },
    
},{
      timestamps: true
    });
    const Posts = mongoose.model("Posts", postsSchema);
    module.exports = Posts;
    