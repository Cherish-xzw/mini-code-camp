'use strict';

const
    express = require('express');

const homeController = require('../controllers/frontend/home');

module.exports = function frontendRoutes() {
    /* eslint new-cap :off */
    const router = express.Router();

    router.get('/', homeController.index);
    require('../controllers/frontend/course')(router);

    return router;
};
