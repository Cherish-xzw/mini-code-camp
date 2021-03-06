const _ = require('lodash');
const Block = require('../model/block');
const Challenge = require('../model/challenge');
const util = require('../utils');

function CourseController(router) {
   // 课程列表
  router.get('/course', function (req, res) {
    Block
      .find()
      .sort('superOrder')
      .sort('order')
      .then((blocks) => {
        res.render('course', {
          title: '课程列表',
          blocks: _.groupBy(blocks, 'superBlock')
        });
      });
  });

  // 课程详情
  router.get('/challenge/:id', function (req, res) {
    Challenge.findById(req.params.id).then((challenge) => {
      res.render('challenge', {
        title: '课程详情',
        challenge: challenge,
        tests: util.createTests(challenge.tests)
      });
    });
  });
}

module.exports = CourseController;
