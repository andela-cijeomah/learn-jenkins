var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('Welcome to bendozy.com More details coming soon', done);
  });
});
