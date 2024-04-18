const {
  produitsListe,
  produitCreate,
  produitDelete,
} = require("../controllers/produit.controllers");

const router = require("express").Router();

router.get("/", produitsListe);

router.post("/", produitCreate);

router.delete("/:produitId", produitDelete);

module.exports = router;
