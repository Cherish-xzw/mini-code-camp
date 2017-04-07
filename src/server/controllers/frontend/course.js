/**
 * Course Controller
 * @param {object} router
 */
const Block = require('../../schema/block');
const _ = require('lodash');

function CourseController(router) {
    router.get('/course', function (req, res) {
        Block.find(function (err, blocks) {
            res.render('course', {blocks: _.groupBy(blocks,'superBlock')});
        });
    });

    router.get('/challenge/:id', function (req, res) {
        res.render('challenge');
    });
}

module.exports = CourseController;
