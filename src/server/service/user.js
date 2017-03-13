/**
 * Created by ACER on 2017/3/13.
 */
const
    db = require('../config').db,
    userModel = '../schema/user';

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

module.exports = new UserService();
