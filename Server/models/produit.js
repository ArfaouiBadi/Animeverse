const mongoose = require("mongoose")

const produitSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        idSubCategory: {
            type: String,
        },
        idCategory: {
            type: String
        },
    }
)

const Produit = mongoose.model("produits", produitSchema)

module.exports = Produit