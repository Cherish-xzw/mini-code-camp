

/**
 * Controller for admin SPA.
 * @param {object} router A express router
 */
function AdminController(router) {
    router.get('/admin', function (req, res) {
        res.render('admin', {
            layout: false,
        });
    });
}

module.exports = AdminController;
