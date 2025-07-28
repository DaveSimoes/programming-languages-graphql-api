const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creator: String,
  year: Number,
  description: String,
  website: String
});

module.exports = mongoose.model('Language', languageSchema);