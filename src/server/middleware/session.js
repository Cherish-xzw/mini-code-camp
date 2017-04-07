/**
 * Created by ACER on 2017/4/7.
 */
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const connection = require('../config').mongoDB;

module.exports = function () {
  return session({
      secret:"session-secret",
      resave:true,
      saveUninitialized:true,
      store:new MongoStore({
          mongooseConnection:connection
      })
  });
};
