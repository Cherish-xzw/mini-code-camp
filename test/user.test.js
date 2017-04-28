const
  should = require('should'),
  userService = require('../src/server/service/user');

describe('user.js', function () {
  it('should return user by id', function (done) {
    userService.getUserById(1).then(function (user) {
      should.exist(user);
      done();
    }).catch(done);

    userService.getUserById(10000).then(function (user) {
      should.not.exist(user);
      done();
    }).catch(done);
  });

  it('should return user by username', function (done) {
    userService.getUserByUsername('test').then(function (user) {
      should.exist(user);
      done();
    }).catch(done);
  });

  it('should add user without error', function (done) {
    userService.addUser('test2', '123456').then(function (result) {
      should.exist(result);
      done();
    }).catch(done);
  });
});
