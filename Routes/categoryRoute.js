const express = require("express");
const {
  getCategories,
  createCategory,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require("../Services/categoryService");

const router = express.Router();

router.route("/").get(getCategories).post(createCategory);
router
  .route("/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
