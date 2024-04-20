const mongoose = require('mongoose');
const express = require('express');
const produitController = require('./controllers/produit.controllers');
const app = express();

app.use(express.json());

const connectionString = 'mongodb+srv://ivanjocc:FkE1wzTVmMv5ccWG@products.vleesjh.mongodb.net/?retryWrites=true&w=majority&appName=products';

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
