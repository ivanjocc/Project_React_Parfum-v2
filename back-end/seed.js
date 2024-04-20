const mongoose = require('mongoose');
const Produit = require('./database/models/produit.model');

const connectionString = 'mongodb+srv://ivanjocc:FkE1wzTVmMv5ccWG@products.vleesjh.mongodb.net/?retryWrites=true&w=majority&appName=products';

mongoose.connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    insertData();
  })
  .catch(e => console.error("Problem connecting to MongoDB Atlas:", e));

async function insertData() {
  const produits = [
    { _id: 1, name: "Cacao Porcelana", image: "assets/images/produits/produit1.jpg", note: "Gourmand, Boisé" },
    { _id: 2, name: "Santal Blond", image: "assets/images/produits/produit2.jpg", note: "Boisé, Ambré" },
    { _id: 3, name: "Cuir Nilam", image: "assets/images/produits/produit3.jpg", note: "Boisé, Cuiré" },
    { _id: 4, name: "Poivre Pomelo", image: "assets/images/produits/produit4.jpg", note: "Épicé, Hespéridé" },
    { _id: 5, name: "Rose Ardoise", image: "assets/images/produits/produit5.jpg", note: "Floral, Boisé, Ambré" },
    { _id: 6, name: "Iris Ebène", image: "assets/images/produits/produit6.jpg", note: "Floral, Cuir" },
    { _id: 7, name: "Bois d'Ambrette", image: "assets/images/produits/produit7.jpg", note: "Musqué, Boisé" },
    { _id: 8, name: "Cèdre Figalia", image: "assets/images/produits/produit8.jpg", note: "Végétal, Boisé" },
    { _id: 9, name: "Narcisse Taiji", image: "assets/images/produits/produit9.jpg", note: "Floral, Boisé, Épicé" }
  ];

  try {
    await Produit.insertMany(produits);
    console.log('Productos insertados exitosamente');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error al insertar productos', error);
    mongoose.disconnect();
  }
}
