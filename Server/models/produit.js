const mongoose = require("mongoose")

const produitSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true,
            unique: true
        },
        otherViews:{
            type:Array,
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        
        series:{
            type: String,
        },
        idCategory: {
            type: String
        },
    }
)

const Produit = mongoose.model("produits", produitSchema)

module.exports = Produit