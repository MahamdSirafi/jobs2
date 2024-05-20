const catchAsync = require('../utils/catchAsync');
const Rrg = require('../models/registerModel');
const AppError = require('../utils/appError');
exports.checkTest = catchAsync(async (req, res, next) => {
  const docRrg = await Rrg.findOne({ user: req.user._id, post: req.params.id });
  if (!docRrg) {
    return next(new AppError(`plese aplay this job`, 400));
  } else {
    if (docRrg.status != 'testing') {
      return next(new AppError(`wating for tern to testing`, 400));
    }
  }
  next();
});
