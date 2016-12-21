'use strict';

const
    express = require('express'),
    exphbs = require('express-handlebars');

const app = module.exports = express();
const port = 3000;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('../client'));

app.get('/', function (req, res, next) {
    res.render('index', {
        message: 'This message is from express-handlebars',
    });
});

app.listen(port);
console.log(`app started at port ${port}!`);

