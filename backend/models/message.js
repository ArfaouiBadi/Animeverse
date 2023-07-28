const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        }
    }
)

const Message = mongoose.model("message", messageSchema)

module.exports = Message