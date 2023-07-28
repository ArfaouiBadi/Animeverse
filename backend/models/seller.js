const mongoose = require("mongoose")

const sellerSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        password: {
            type: String,
            required: true
        },
        shopName: {
            type: String,
            required: true,
            unique:true
        },
         logoShop: {
            type: String,
            required: true
        }
    }
)

const Seller = mongoose.model("sellers", sellerSchema)

module.exports = Seller