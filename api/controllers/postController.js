const Post = require("../models/postModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getpost = handlerFactory.getOne(Post);
exports.createpost = handlerFactory.createOne(Post);
exports.updatepost = handlerFactory.updateOne(Post);
exports.deletepost = handlerFactory.deleteOne(Post);
exports.getAllpost = handlerFactory.getAll(Post);
exports.defult = catchAsync(async (req, res, next) => {
  //write your code here
  const doc = []
  if(!doc){
    return (new AppError("Message Error",400))
    }
  res.status(200).json({
    status: "success",
    doc,
  });
});
