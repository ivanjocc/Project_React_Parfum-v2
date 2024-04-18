const mongoose = require("mongoose");
const schema = mongoose.Schema;

const produitSchema = schema({
  name: {
    type: String,
    minlength: [1, "Ce champs est requis !"],
    required: true,
  },
  image: {
    type: String,
    minlength: [1, "Ce champs est requis !"],
    required: true,
  },
  note: {
    type: String,
    minlength: [1, "Ce champs est requis !"],
    required: true,
  },
});

const Produit = mongoose.model("produit", produitSchema);

module.exports = Produit;
