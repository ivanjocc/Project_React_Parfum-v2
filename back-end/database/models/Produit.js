const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema = new Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  image: {
    type: String,
    required: true,
    minlength: 1
  },
  note: {
    type: String,
    required: true,
    minlength: 1
  }
});

const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit;
