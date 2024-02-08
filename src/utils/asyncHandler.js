const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// This code defines a higher-order function called asyncHandler that wraps around other route handler functions in an Express.js application. Let's break it down:

// Function Definition:
// const asyncHandler = (requestHandler) => { ... };: This defines a function named asyncHandler. It takes a requestHandler function as its argument.

// Inner Function:
// (req, res, next) => { ... }: This is an arrow function that acts as the inner function of asyncHandler. It takes three parameters: req (the request object), res (the response object), and next (a callback function to pass control to the next middleware function).
// This inner function serves as a wrapper around the requestHandler function provided to asyncHandler.

// Asynchronous Handling:
// Promise.resolve(requestHandler(req, res, next)): This line invokes the requestHandler function with the provided req, res, and next parameters. It returns a promise.
// .catch((err) => next(err)): This attaches a .catch() block to the promise. If the promise rejects (i.e., if an error occurs during the execution of the requestHandler function), it calls next(err), passing the error object to the next middleware or error handling route.

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
