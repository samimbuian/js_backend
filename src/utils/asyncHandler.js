// this is a wrapper for async function and try catch
// our all async function going throw this wrapper

//promise function (error)
// const asyncHandler = (requestHandler) => {
//   return (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).reject((err) => next(err));
//   };
// };

// export { asyncHandler };

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// this function is a Higher Order Function
// that accept function as a parameter
// and return a function
// const asyncHandler = () => {};
// const asyncHandler = (func) => {() => {}};

//try catch async function
// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//     await func(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
