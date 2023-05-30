const { StatusCodes } = require("http-status-codes")
const {
  getAllCategories,
  createCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
} = require("../../../services/mongoose/categories")

// Create categories
const create = async (req, res, next) => {
  try {
    const result = await createCategory(req)
    res.status(StatusCodes.CREATED).json({
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

// Get all categories
const index = async (req, res, next) => {
  try {
    const result = await getAllCategories(req)
    res.status(StatusCodes.OK).json({
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

// Get one category
const find = async (req, res, next) => {
  try {
    const result = await getOneCategory(req)
    res.status(StatusCodes.CREATED).json({
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

// Update category
const update = async (req, res, next) => {
  try {
    const updateCategories = await updateCategory(req)
    res.status(StatusCodes.CREATED).json({
      data: updateCategories,
    })
  } catch (err) {
    next(err)
  }
}

// Delete category
const destroy = async (req, res, next) => {
  try {
    const result = await deleteCategory(req)
    res.status(StatusCodes.OK).json({
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  index,
  create,
  find,
  update,
  destroy,
}
