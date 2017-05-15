function HomeController() {}

HomeController.prototype.index = function (req, res) {
  res.render('index', {
    title: '首页',
    message: '开始你的第一个Hello World吧！',
  });
};

module.exports = new HomeController();
