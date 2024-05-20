const Posts = require('../models/postModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getposts = handlerFactory.getOne(Posts);
exports.createposts = handlerFactory.createOne(Posts);
exports.updateposts = handlerFactory.updateOne(Posts);
exports.deleteposts = handlerFactory.deleteOne(Posts);
exports.getAllposts = handlerFactory.getAllpop1(Posts, {
  path: 'owner',
  select: 'name company',
});
