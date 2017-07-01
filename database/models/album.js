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

// don't create a model because this is a subdocument of artist

module.exports = AlbumSchema;
