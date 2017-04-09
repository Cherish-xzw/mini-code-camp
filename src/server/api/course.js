/**
 * Created by ACER on 2017/4/8.
 */

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

}

module.exports = CourseApi;
