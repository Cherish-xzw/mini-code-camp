const mongoose = require('mongoose');
mongoose.connect('mongodb://115.159.189.135/freecodecamp');

module.exports = mongoose.connection;