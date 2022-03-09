const supertest = require('supertest');
const app = require('../src/app');

// eslint-disable-next-line no-undef
describe('Routes Tests', () => {
  // eslint-disable-next-line no-undef
  test('Testing for / endpoint and get status 200', (done) => {
    supertest(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        // eslint-disable-next-line no-undef
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
