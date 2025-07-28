const mongoose = require('mongoose');

const frameworkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  language: { type: mongoose.Schema.Types.ObjectId, ref: 'Language' },
  type: String, // ex: framework, library, tool
  description: String,
  website: String
});

module.exports = mongoose.model('Framework', frameworkSchema);