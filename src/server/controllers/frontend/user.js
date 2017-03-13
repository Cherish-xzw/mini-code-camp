/**
 * Created by ACER on 2017/3/13.
 */

const userService = require('../../service/user');

function UserController(router){

    router.get('/user/:id',function(req,res){
        const id = req.params.id;
        userService.getUserById(id).then(function(user){
            res.json(user);
        });
    });

}

module.exports = UserController;
