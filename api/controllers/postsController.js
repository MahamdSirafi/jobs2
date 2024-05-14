const Posts = require('../models/postModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getposts = handlerFactory.getOne(Posts);
exports.createposts = handlerFactory.createOne(Posts);
exports.updateposts = handlerFactory.updateOne(Posts);
exports.deleteposts = handlerFactory.deleteOne(Posts);
exports.getAllposts = handlerFactory.getAll(Posts);
exports.defult = catchAsync(async (req, res, next) => {
  //write your code here
  const doc = [];
  if (!doc) {
    return new AppError('Message Error', 400);
  }
  res.status(200).json({
    status: 'success',
    doc,
  });
});
