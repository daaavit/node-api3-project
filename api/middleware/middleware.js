const User = require('../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log("logger middleware")
  const timestamp = new Date().toLocaleString()
  const method = req.method
  const url = req.originalUrl
  console.log(`${timestamp} ${method} ${url}`)
}

async function validateUserId(req, res, next) {
  try {
    const users = await User.getById(req.params.id)
    if (!user) {
      res.status(404).json({
        message: "no such user"
      })
    } else {
      req.user = user
      next()
    }
  }
  catch (err) {
    res.status(404).json({
    message: "problem finding user"
    })
  }
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