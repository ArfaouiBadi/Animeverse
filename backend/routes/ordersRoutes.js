const express = require("express");
const {
  createCommande,
  getAllCommandes,
  getCommandeById,
  deleteCommandeById,
} = require("../controller/commandeController");
const router = express.Router();

router.get("/", getAllCommandes);
router.delete("/:id", deleteCommandeById);
router.get("/:id", getCommandeById);
router.post("/", createCommande);

module.exports = router;
