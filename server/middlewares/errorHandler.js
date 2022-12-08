const errorHandler = (error, req, res, next) => {
  let errorCode = 500;
  let message = "Internal Server Error";

  if (
    error.name === "SequelizeUniqueConstraintError" ||
    error.name === "SequelizeValidationError"
  ) {
    errorCode = 400;
    message = error.errors[0].message;
  } else if (error.name === "SequelizeDatabaseError") {
    errorCode = 400;
    message = "Invalid Input";
  } else if (error.name === "Data not found") {
    errorCode = 404;
    message = "Data not found";
  }
  res.status(errorCode).json({ message });
};

module.exports = errorHandler;
