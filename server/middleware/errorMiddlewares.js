// Middleware to handle 404 errors (route not found)
const routeNotFound = (req, res, next) => {
    const error = new Error(`Route not found: ${req.originalUrl}`);
    res.status(404);
    next(error); // Pass the error to the error handler middleware
  };
  
  // Global error handler middleware
  const errorHandler = (err, req, res, next) => {
    // If no specific status code is set, use 500 (internal server error)
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
  
    // Special case for MongoDB CastError (invalid ObjectId)
    if (err.name === "CastError" && err.kind === "ObjectId") {
      statusCode = 404;
      message = "Resource not found";
    }
  
    // Send the error response
    res.status(statusCode).json({
      message: message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack trace in production
    });
  };
  
  // Export the middlewares
  export { routeNotFound, errorHandler };
  