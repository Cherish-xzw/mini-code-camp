
function HomeController() {

}

HomeController.prototype.index = function (req, res) {
  res.render('index', {
    message: 'This message is from express-handlebars',
  });
};

module.exports = new HomeController();
