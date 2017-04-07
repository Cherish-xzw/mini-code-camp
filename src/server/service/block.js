const mongoose = require('mongoose');
const blockSchema = require('../schema/block');
const db = require('../config').mongoDB;
const Block = mongoose.model('test', blockSchema);

new Block({ name: "jj" }).save(function (err) {
    console.log(err);
});

Block.findOne({ name: "jj" }, function (err, block) {
    console.log(err);
    console.log(block);
});
