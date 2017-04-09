/**
 * Course Controller
 * @param {object} router
 */
const _ = require('lodash');
const Block = require('../../model/block');
const Challenge = require('../../model/challenge');

function CourseController(router) {

    /**
     * 课程列表
     */
    router.get('/course', function (req, res) {
        Block.find(function (err, blocks) {
            res.render('course', {blocks: _.groupBy(blocks, 'superBlock')});
        });
    });

    /**
     * 课程详情
     */
    router.get('/challenge/:id', function (req, res) {
        Challenge.findById(req.params.id).then(challenge => {
            res.render('challenge', {challenge: challenge});
        });
    });

}


module.exports = CourseController;
