/**
 * Created by ACER on 2017/4/8.
 */

const _ = require('lodash');
const Block = require('../model/block');
const Challenge = require('../model/challenge');


function CourseApi(router) {

    router.get('/blocks/:id/challenges', function (req, res) {
        Challenge.find({
            blockId:req.params.id
        }).select({
            title:1,
            _id:1
        }).then(chanllenges => {
            res.json(chanllenges);
        });
    });

    /**
     * 课程列表
     */
    router.get('/course', function (req, res) {
        Block
            .find()
            .sort('superOrder')
            .sort('order')
            .then(blocks => {
                res.json({blocks: _.groupBy(blocks, 'superBlock')});
            });
    });

    /**
     * 课程详情
     */
    router.get('/challenge/:id', function (req, res) {
        Challenge.findById(req.params.id).then(challenge => {
            res.json({challenge: challenge});
        });
    });

}

module.exports = CourseApi;
