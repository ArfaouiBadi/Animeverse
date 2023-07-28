const mongoose = require("mongoose")

const categorieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
    }
)

const Categorie = mongoose.model("categories", categorieSchema)

module.exports = Categorie