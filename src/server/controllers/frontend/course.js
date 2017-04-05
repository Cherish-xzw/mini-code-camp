
/**
 * Course Controller
 * @param {object} router
 */
function CourseController(router) {
    router.get('/course', function (req, res) {
        res.render('course');
    });

    router.get('/challenge/:id',function(req,res){
        res.render('challenge');
    });
}

module.exports = CourseController;
