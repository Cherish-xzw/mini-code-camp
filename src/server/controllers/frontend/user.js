/**
 * Created by ACER on 2017/3/13.
 */

const md5 = require('md5');
const userService = require('../../service/user');

function UserController(router){

    router.get('/user/:id',function(req,res){
        const id = req.params.id;
        userService.getUserById(id).then(function(user){
            res.json(user);
        });
    });

    router.post('/user',function(req,res){
        const userInfo = req.body;
        userService.addUser(userInfo.username,md5(userInfo.password)).then(function(result){
            if(!result) throw new Error('注册失败！');
            res.render('signin');
        }).catch(function(error){
            res.status(500).json({error:error});
        });
    });

    router.post('/signin',function(req,res){
        const userInfo = req.body;
        userService.getUserByUsername(userInfo.username).then(function (user) {
            if(!md5(userInfo.password) === user.password) throw new Error('密码错误！');
            res.render('course');
        }).catch(function(error){
            res.status(500).json({error:error});
        })
    });

    router.get('/signin',function(req,res){
        res.render('signin');
    });

    router.get('/signup',function(req,res){
        res.render('signup')
    });

}

module.exports = UserController;
