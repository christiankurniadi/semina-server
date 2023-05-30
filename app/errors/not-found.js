// Import http status codes
const { StatusCodes } = require("http-status-codes")
// Import custom api error
const CustomAPIError = require("./custom-api-error")

class NotFound extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}
module.exports = NotFound
