const Menu = require('../models/Menu');
const mongoose = require('mongoose'); // Import mongoose to use ObjectId
var ObjectId = require('mongodb').ObjectId;

const getMenuById = async (req, res) => {
  try {
    const id = req.params.id;
    var idToSearch = new ObjectId(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    const menu = await Menu.findById(idToSearch);

    if (!menu) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getMenuById };
