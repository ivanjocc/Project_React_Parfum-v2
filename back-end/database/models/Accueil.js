const mongoose = require('mongoose');

const accueilSchema = new mongoose.Schema({
	image: {
	  url: String,
	  alt: String
	},
	description: {
	  titre: String,
	  texte: String,
	  bouton: {
		lien: String,
		texte: String
	  }
	}
  });
  
  const Accueil = mongoose.model("Accueil", accueilSchema);
  