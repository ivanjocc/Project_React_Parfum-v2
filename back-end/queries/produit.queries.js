const Produit = require('../database/models/Produit');

exports.createProduit = async function(produitData) {
  try {
    const produit = new Produit(produitData);
    await produit.save();
    return produit;
  } catch (error) {
    throw error;
  }
};

exports.getProduits = async function() {
  try {
    return await Produit.find();
  } catch (error) {
    throw error;
  }
};

exports.deleteProduit = async function(id) {
  try {
    return await Produit.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
