var mongoose = require('mongoose');

var FavoritesSchema = new mongoose.Schema({
  Title:{type: String},
  Year:{type: String},
  Director:{type: String}
});

var favorites = mongoose.model('favorites', FavoritesSchema);

module.exports = favorites;
