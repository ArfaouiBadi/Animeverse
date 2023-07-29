const produits = require("../models/produit");
const multer = require("multer");
const path = require("path");
const createProduct = async (req, res) => {
  const { name, image, price, description, idSubCategory, idCategory } =
    req.body;
  let emptyFields = [];
  if (!name) {
    emptyFields.push("name");
  }
  if (!image) {
    emptyFields.push("image");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!idSubCategory) {
    emptyFields.push("idSubCategory");
  }
  if (!idCategory) {
    emptyFields.push("idCategory");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "fill all field", emptyFields });
  }
  try {
    const product = await produits.create({
      name,
      image,
      id,
      price,
      description,
      idSubCategory,
      idCategory,
    });
    res.status(201).json(product);
    console.log(product);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const product = await produits.find();
    res.status(200).json(product);
  } catch (err) {
    return res.status(404).json({ err: "not found" });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const product = await produits.findById(id);
    res.status(200).json(product);
  } catch (err) {
    return res.status(404).json({ err: "produit not found" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const Pdeleted = await produits.findByIdAndDelete({ _id: id });

    res.status(200).json(Pdeleted);
  } catch (err) {
    return res.status(404).json({ err: "product Not found" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const Uproduct = await produits.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(Uproduct);
  } catch (err) {
    return res.status(404).json({ err: err.message });
  }
};

module.exports = {
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts,
  createProduct,
};
