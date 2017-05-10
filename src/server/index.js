// ## server boot up
'use strict';

const
  path = require('path'),
  express = require('express'),
  exphbs = require('express-handlebars'),
  bodyParser = require('body-parser'),
  session = require('express-session');

const routes = require('./routes');

const app = express();
const port = 4000;

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  secret: 'session-secret',
  resave: true,
  saveUninitialized: true
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts/',
  defaultLayout: 'layout',
  extname: '.hbs',
  helpers: {
    json: function (context) {
      return JSON.stringify(context);
    }
  }
}));

app.use(routes.frontend());
app.use('/api', routes.api());

app.listen(port, () => {
  console.log(`app started at http://localhost:${port}`);
});

module.exports = app;
