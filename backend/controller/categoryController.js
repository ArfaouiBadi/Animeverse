const categorie = require("../models/categorie");

const getAllCategories = async (req, res) => {
  try {
    const categories = await categorie.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getcategorieById = async (req, res) => {
  const { id } = req.params;
  try {
    const categorie = await categorie.findById(id);
    if (!categorie) {
      return res.status(404).json({ error: "categorie not found" });
    }
    res.status(200).json(categorie);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createcategorie = async (req, res) => {
  try {
    const newcategorie = new categorie(req.body);
    const savedcategorie = await newcategorie.save();
    res.status(201).json(savedcategorie);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatecategorie = async (req, res) => {
  const { id } = req.params;
  try {
    const Ucategorie = await categorie.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(Uproduct);
  } catch (err) {
    return res.status(404).json({ err: err.message });
  }
};

const deletecategorie = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedcategorie = await categorie.findByIdAndDelete(id);
    if (!deletedcategorie) {
      return res.status(404).json({ error: "categorie not found" });
    }
    res.status.json(deletedcategorie);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllCategories,
  getcategorieById,
  createcategorie,
  updatecategorie,
  deletecategorie,
};
