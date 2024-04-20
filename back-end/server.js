const mongoose = require('mongoose');
const express = require('express');
const produitController = require('./controllers/produit.controllers');
const app = express();

app.use(express.json());

const connectionString = 'mongodb+srv://ivanjocc:FkE1wzTVmMv5ccWG@products.vleesjh.mongodb.net/?retryWrites=true&w=majority&appName=products';

<<<<<<< HEAD
app.get('/produits', async (req, res) => {
  try {
    const produits = await Produit.find();
    res.json(produits);
  } catch (error) {
    res.status(500).send("Error retrieving products: " + error.message);
  }
});


app.listen((PORT = 5000), () =>
  console.log(`Server is on http://localhost:${PORT}`)
);
=======
mongoose.connect(connectionString)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(e => console.error("Problem connecting to MongoDB Atlas:", e));

app.get('/produits', produitController.listeProduits);
app.post('/produits', produitController.createProduit);
app.delete('/produits/:id', produitController.deleteProduit);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
>>>>>>> 5ebb8488724bc65c001a13cd51ff5cee60120279
