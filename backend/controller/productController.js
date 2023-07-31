const produits = require("../models/produit");
const multer = require("multer");
const path = require("path");
const createProduct = async (req, res) => {
  const { title, image, price, description,otherView, category,quantity } =
    req.body;
  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!otherView) {
    emptyFields.push([]);
  }
  if (!quantity) {
    emptyFields.push(0);
  }
  if (!image) {
    emptyFields.push("image");
  }
  if (!price) {
    emptyFields.push(0);
  }
  if (!description) {
    emptyFields.push("description");
  }
  
  if (!category) {
    emptyFields.push("idCategory");
  }
  
  try {
    const product = await produits.create({
      title,
      image,
      category,
      quantity,
      price,
      description,
      otherView,
    });
    
    res.status(201).json(product);
    console.log(product);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

const getProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qCategory=="NewArrivales") {
      products = await produits.find().sort({ createdAt: -1 }).limit(3);
    } else if (qCategory) {
      products = await produits.find({
        category: {
          $in: [qCategory],
        },
      });
    } else {
      products = await produits.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
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
