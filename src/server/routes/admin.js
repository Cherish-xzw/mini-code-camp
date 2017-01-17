const express = require('express');

module.exports = function AdminRoutes() {
    /* eslint new-cap:off */
    const router = express.Router();

    require('../controllers/admin')(router);

    return router;
};
