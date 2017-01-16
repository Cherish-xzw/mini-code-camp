const express = require('express');

module.exports = function apiRoutes() {
    /* eslint new-cap:off */
    const router = express.Router();

    router.get('/api/hello', function (req, res, next) {
        res.send({
            hello: 'hello world!',
        });
    });

    return router;
};

