const express = require("express");
const router = express.Router();
const {
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts,
  createProduct,
} = require("../controller/productController");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
module.exports = router;
