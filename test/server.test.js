const
  request = require('supertest'),
  should = require('should'),
  app = require('../src/server/index');

describe('server.js', function () {
  before(function (done) {
    let req = request(app);
    done();
  });

  it('GET / should return 200', function (done) {
    request.get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(done);
  });
});
