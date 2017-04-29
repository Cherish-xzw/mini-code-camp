const express = require('express');
const homeController = require('../controllers/home');

module.exports = function frontendRoutes() {
  /* eslint new-cap :off */
  const router = express.Router();

  router.get('/', homeController.index);
  require('../controllers/course')(router);
  require('../controllers/user')(router);

  return router;
};
