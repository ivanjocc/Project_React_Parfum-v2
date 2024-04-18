const Produit = require("../database/models/produit.model");

exports.getProduits = () => {
  return Produit.find().sort({ _id: -1 });
};

exports.createProduit = (unProduit) => {
  const produit = new Produit(unProduit);
  return produit.save();
};

exports.deleteProduit = (produitId) => {
  return Produit.findByIdAndDelete(produitId).exec();
};
