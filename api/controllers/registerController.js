const Register = require('../models/registerModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getregister = handlerFactory.getOne(Register, {
  path: 'user',
  select: 'name photo -_id',
});
exports.createregister = handlerFactory.createOne(Register);
exports.updateregister = handlerFactory.updateOne(Register);
exports.deleteregister = handlerFactory.deleteOne(Register);
exports.getAllregister = handlerFactory.getAllpop1(Register, {
  path: 'user',
  select: 'name photo -_id',
},{
  path: 'post',
  select: '-test -createdAt -updatedAt',
});
