'use strict';

const
    express = require('express'),
    exphbs = require('express-handlebars'),
    path = require('path'),
    bodyParser = require('body-parser');

const
    routes = require('./routes'),
    session = require('./middleware/session');

const app = express();
const port = 3000;

app.use(session());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts/',
    defaultLayout: 'layout',
    extname: '.hbs',
}));

app.use(routes.frontend());
app.use(routes.api());
app.use(routes.admin());

app.listen(port);
console.log(`app started at port ${port}!`);

module.exports = app;
