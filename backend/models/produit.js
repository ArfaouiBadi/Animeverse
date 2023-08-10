const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
    unique: false,
  },
  otherView:{
    type:Array,
    required:false,
  },
  price: {
    type: Number,
    required: true,
  },
  series:{
    type:String,
    required:false,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 1,
  },
},{ timestamps: true });

const Produit = mongoose.model("produits", produitSchema);

module.exports = Produit;
