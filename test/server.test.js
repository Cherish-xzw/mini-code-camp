const
    request = require('supertest'),
    should = require('should'),
    app = require('../src/server/server');

describe('server.js', function () {
    before(function (done) {
        request = request(app);
        done();
    });

    it('GET / should return 200', function (done) {
        request.get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .end(done);
    });
});
