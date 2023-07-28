const mongoose = require("mongoose")

const subCategorieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        idCategorie: {
            type: String,
            required: true
        }
    }
)

const SubCategorie = mongoose.model("subcategories", subCategorieSchema)

module.exports = SubCategorie