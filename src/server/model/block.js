const mongoose = require('mongoose');
const db = require('../config').mongoDB;

/* eslint quotes :off */
const blockSchema = new mongoose.Schema({
  "superBlock": {
    "type": "string",
    "required": true,
    "description": "The super block that this block belongs to"
  },
  "order": {
    "type": "number",
    "required": true,
    "description": "The order in which this block appears"
  },
  "name": {
    "type": "string",
    "required": true,
    "description": "The name of this block derived from the title," +
    " suitable for regex search"
  },
  "superOrder": {
    "type": "number",
    "required": true
  },
  "dashedName": {
    "type": "string",
    "required": true,
    "description": "Generated from the title to be URL friendly"
  },
  "title": {
    "type": "string",
    "required": true,
    "description": "The title of this block, suitable for display"
  },
  "time": {
    "type": "string",
    "required": true
  }
}, {
  collection: 'block'
});

module.exports = mongoose.model('block', blockSchema);
