const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
	  type: String,
	  required: true,
	  minlength: 1
	},
	password: {
	  type: String,
	  required: true,
	  minlength: 1
	},
	fullName: {
	  type: String,
	  required: true,
	  minlength: 1
	}
  });
  
  const User = mongoose.model("User", userSchema);
  