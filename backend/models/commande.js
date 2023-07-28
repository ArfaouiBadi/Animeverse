const mongoose = require("mongoose")

const commandeSchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true
        },
        products:[mongoose.Schema.Types.Mixed],
        idUser: {
            type: String,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        }

    }
)

const Commande = mongoose.model("commandes", commandeSchema)

module.exports = Commande