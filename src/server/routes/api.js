const express = require('express');

module.exports = function apiRoutes() {
    /* eslint new-cap:off */
    const router = express.Router();

    require('../api/course')(router);

    return router;
};

