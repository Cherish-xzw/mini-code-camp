'use strict';

const
    express = require('express'),
    exphbs = require('express-handlebars');

const
    routes = require('./routes');

const app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts/',
    defaultLayout: 'layout',
    extname: '.hbs',
}));

app.use(express.static('../client'));

app.use(routes.frontend());
app.use(routes.api());

app.listen(port);
console.log(`app started at port ${port}!`);

module.exports = app;
