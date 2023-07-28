const Seller = require("../models/seller");

// Create a new seller
const createSeller = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      password,
      email,
      address,
      shopName,
      phone,
      logoShop,
    } = req.body;
    const seller = new Seller({
      firstName,
      lastName,
      password,
      email,
      address,
      shopName,
      phone,
      logoShop,
    });
    const savedSeller = await seller.save();
    res.status(201).json(savedSeller);
  } catch (error) {
    res.status(500).json({ error: "Failed to create seller" });
  }
};

// Get all sellers
const getAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sellers" });
  }
};

// Get a single seller by ID
const getSellerById = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const seller = await Seller.findById(sellerId);
    if (seller) {
      res.status(200).json(seller);
    } else {
      res.status(404).json({ error: "Seller not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch seller" });
  }
};

// Update a seller by ID
const updateSellerById = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const {
      firstName,
      lastName,
      password,
      email,
      address,
      shopName,
      phone,
      logoShop,
    } = req.body;
    const updatedSeller = await Seller.findByIdAndUpdate(
      sellerId,
      {
        firstName,
        lastName,
        password,
        email,
        address,
        shopName,
        phone,
        logoShop,
      },
      { new: true }
    );
    if (updatedSeller) {
      res.status(200).json(updatedSeller);
    } else {
      res.status(404).json({ error: "Seller not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update seller" });
  }
};

// Delete a seller by ID
const deleteSellerById = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const deletedSeller = await Seller.findByIdAndDelete(sellerId);
    if (deletedSeller) {
      res.status(200).json({ message: "Seller deleted successfully" });
    } else {
      res.status(404).json({ error: "Seller not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete seller" });
  }
};

module.exports = {
  createSeller,
  getAllSellers,
  getSellerById,
  updateSellerById,
  deleteSellerById,
};
