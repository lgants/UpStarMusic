// Todo: create Album Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: String,
  image: String,
  revenue: Number
});

// Album should be a schema, but not a model, because it's a subdocument of artist
module.exports = AlbumSchema;
