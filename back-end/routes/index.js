const router = require("express").Router();

// Importer les différent router des routes
const produitRoutes = require("./produit.routes");

router.get("/", (req, res) => {
  res.end("Coucou !");
});

router.use("/produits", produitRoutes);

module.exports = router;
