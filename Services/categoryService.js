const Category = require("../Models/categoryModel");
const slugify = require("slugify");
const asyncHandler = require("express-async-handler");

exports.getCategories = asyncHandler(async (req, res) => {
  const limit = req.query.limit * 1 || 5;
  const page = req.query.page * 1 || 1;
  const skip = (page - 1) * limit;
  const categories = await Category.find({}).skip(skip).limit(limit);

  res.status(200).json({ results: categories.length, data: categories });
});

exports.getCategoryById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const category = await Category.findById(id);
  if (!category) {
    return res
      .status(404)
      .json({ message: `Category Not Found with id ${id}` });
  }
  res.status(200).json({ data: category });
});

exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  console.log(req.body);

  const category = await Category.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });
});

exports.updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const category = await Category.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );

  if (!category) {
    return res.status(404).json({ msg: `No category for this id ${id}` });
  }
  res.status(200).json({ data: category });
});

exports.deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndDelete(id);

  if (!category) {
    return res.status(404).json({ msg: `No category for this id ${id}` });
  }
  res.status(204).send();
});
