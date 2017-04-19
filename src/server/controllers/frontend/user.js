/**
 * Created by ACER on 2017/3/13.
 */

const md5 = require('md5');
const userService = require('../../service/user');

function UserController(router) {

    router.get('/user/:id', function (req, res) {
        const id = req.params.id;
        userService.getUserById(id).then(function (user) {
            res.json(user);
        });
    });

    router.post('/user', function (req, res) {
        const userInfo = req.body;
        userService.addUser(userInfo.username, md5(userInfo.password)).then(function (result) {
            if (!result) throw new Error('注册失败！');
            res.render('signin');
        }).catch(function (error) {
            res.status(500).json({error: error});
        });
    });

    router.post('/signin', function (req, res) {
        const userInfo = req.body;
        userService.getUserByUsername(userInfo.username).then(function (user) {
            if(!user){
                res.render('signin',{
                    message:'用户不存在！'
                });
                return ;
            }
            if (!(md5(userInfo.password) === user.password)) {
                res.render('signin',{
                    message:'密码错误！'
                });
                return ;
            }
            res.cookie('user', JSON.stringify({
                uid: user.id,
                name: user.user_name
            }));
            res.redirect('course');
        }).catch(function (error) {
            res.render('signin');
        })
    });

    router.get('/logout',function(req,res){
        req.session.destroy();
        res.cookie('user',null,{maxAge:0});
        res.render('index');
    });

    /**
     * 登录页面
     */
    router.get('/signin', function (req, res) {
        res.render('signin');
    });

    /**
     * 注册页面
     */
    router.get('/signup', function (req, res) {
        res.render('signup')
    });

}

module.exports = UserController;
