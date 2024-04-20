const produitQueries = require('../queries/produit.queries');

exports.listeProduits = async (req, res) => {
  try {
    const produits = await produitQueries.getProduits();
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createProduit = async (req, res) => {
  try {
    const newProduit = await produitQueries.createProduit(req.body);
    res.status(201).json(newProduit);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteProduit = async (req, res) => {
  try {
    const produitDeleted = await produitQueries.deleteProduit(req.params.id);
    res.status(200).json(produitDeleted);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
