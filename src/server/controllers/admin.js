

/**
 * Controller for admin SPA.
 * @param {object} router A express router
 */
function AdminController(router) {
    router.get('/', function (req, res) {
        res.render('admin', {
            layout: false,
        });
    });
}

module.exports = AdminController;
