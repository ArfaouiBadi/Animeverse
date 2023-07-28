const Commande = require("../models/commande");

// Create a new commande
const createCommande = async (req, res) => {
  try {
    const { address, products, idUser, totalPrice } = req.body;
    const commande = new Commande({ address, products, idUser, totalPrice });
    const savedCommande = await commande.save();
    res.status(201).json(savedCommande);
  } catch (error) {
    res.status(500).json({ error: "Failed to create commande" });
  }
};

// Get all commandes
const getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find();
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch commandes" });
  }
};

// Get a single commande by ID
const getCommandeById = async (req, res) => {
  try {
    const { commandeId } = req.params;
    const commande = await Commande.findById(commandeId);
    if (commande) {
      res.status(200).json(commande);
    } else {
      res.status(404).json({ error: "Commande not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch commande" });
  }
};

// Update a commande by ID
const updateCommandeById = async (req, res) => {
  try {
    const { commandeId } = req.params;
    const { address, products, idUser, totalPrice } = req.body;
    const updatedCommande = await Commande.findByIdAndUpdate(
      commandeId,
      { address, products, idUser, totalPrice },
      { new: true }
    );
    if (updatedCommande) {
      res.status(200).json(updatedCommande);
    } else {
      res.status(404).json({ error: "Commande not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update commande" });
  }
};

// Delete a commande by ID
const deleteCommandeById = async (req, res) => {
  try {
    const { commandeId } = req.params;
    const deletedCommande = await Commande.findByIdAndDelete(commandeId);
    if (deletedCommande) {
      res.status(200).json({ message: "Commande deleted successfully" });
    } else {
      res.status(404).json({ error: "Commande not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete commande" });
  }
};

module.exports = {
  createCommande,
  getAllCommandes,
  getCommandeById,
  updateCommandeById,
  deleteCommandeById,
};
