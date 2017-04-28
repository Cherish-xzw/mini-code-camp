const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../config').mongoDB;

/* eslint quotes :off */
const challengeSchema = new Schema({
  "id": {
    "type": "string",
    "id": true
  },
  "name": {
    "type": "string",
    "index": {
      "mongodb": {
        "unique": true,
        "background": true
      }
    }
  },
  "title": {
    "type": "string"
  },
  "type": {
    "type": "string"
  },
  "order": {
    "type": "number"
  },
  "suborder": {
    "type": "number"
  },
  "checksum": {
    "type": "number"
  },
  "isBeta": {
    "type": "boolean",
    "description": "Show only during dev or on beta site" +
    ". Completely omitted otherwise"
  },
  "isComingSoon": {
    "type": "boolean",
    "description": "Challenge shows in " +
    "production, but is unreachable and disabled." +
    " Is reachable in beta/dev only if isBeta flag is set"
  },
  "dashedName": {
    "type": "string"
  },
  "superBlock": {
    "type": "string",
    "description": "Used for ordering challenge blocks in map"
  },
  "superOrder": {
    "type": "number",
    "description": "Used to determine super block order, set by" +
    " prepending two digit number to super block folder name"
  },
  "hint": {
    "type": "array",
    "description": "hints must be a single line of plain text",
    "default": []
  },
  "block": {
    "type": "string"
  },
  "difficulty": {
    "type": "string"
  },
  "description": {
    "type": "array"
  },
  "tests": {
    "type": "array"
  },
  "head": {
    "type": "array",
    "description": "Appended to user code",
    "default": []
  },
  "tail": {
    "type": "array",
    "description": "Prepended to user code",
    "default": []
  },
  "helpRoom": {
    "type": "string",
    "description": "Gitter help chatroom this challenge be" +
    "longs too. Must be PascalCase",
    "default": "Help"
  },
  "fileName": {
    "type": "string",
    "description": "Filename challenge comes from. Used in dev mode"
  },
  "challengeSeed": {
    "type": "array"
  },
  "challengeType": {
    "type": "number"
  },
  "MDNlinks": {
    "type": "array"
  },
  "solutions": {
    "type": "array",
    "default": []
  },
  "releasedOn": {
    "type": "string"
  },
  "translations": {
    "type": "object",
    "default": "{}"
  },
  "required": {
    "type": "array",
    "default": []
  },
  "blockId": {
    type: Schema.Types.ObjectId,
    ref: "Block"
  }
}, {
  collection: 'challenge'
});

module.exports = mongoose.model('challenge', challengeSchema);
