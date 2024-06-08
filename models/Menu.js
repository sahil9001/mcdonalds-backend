const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
const MenuSchema = new mongoose.Schema({
_id: ObjectId,
  Market: {
    type: Map,
    of: String
  },
  Store: [
    {
      Store: String,
      PromotionVersion: String,
      Promotions: Array,
      ProductVersion: String,
      Products: Array
    }
  ],
  // Add other fields as needed
}, { collection: 'menus' }); // Explicitly set the collection name

// Middleware to set the _id before saving the document
MenuSchema.pre('save', function (next) {
  if (this.Store && this.Store.length > 0) {
    this._id = this.Store[0].Store;
  }
  next();
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;
