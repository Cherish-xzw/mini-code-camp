const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const connection = require('../config').mongoDB;

module.exports = function () {
  return session({
    secret: 'session-secret',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: connection
    })
  });
};
