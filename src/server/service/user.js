/**
 * Created by ACER on 2017/3/13.
 */
const
    db = require('../config').db,
    userModel = '../model/user';

const User = db.import(userModel);

function UserService() {
}

UserService.prototype.getUserById = function (id) {
    return User.findOne({
        where: {
            id: id
        }
    });
};

UserService.prototype.getUserByUsername = function(username){
    return User.findOne({
        where:{
            user_name:username
        }
    })
};

UserService.prototype.addUser = function(username,password){
    return this.getUserByUsername(username).then(function(user){
        if(user) throw new Error("该用户已经存在！");
        return User.create({
            user_name:username,
            password:password
        })
    });
};

module.exports = new UserService();
