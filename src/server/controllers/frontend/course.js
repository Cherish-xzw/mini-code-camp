
/**
 * Course Controller
 * @param {object} router
 */
function CourseController(router) {
    router.get('/course', function (req, res) {
        res.render('course');
    });
}

module.exports = CourseController;
