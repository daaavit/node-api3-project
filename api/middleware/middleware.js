function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log("logger middleware")

}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  console.log("validateUser middleware")
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log("validateUser middleware")
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log("validatePost middleware")
}

// do not forget to expose these functions to other modules


module.exports = {
    logger,
    validateUserId,
    validateUser,
    validatePost
}