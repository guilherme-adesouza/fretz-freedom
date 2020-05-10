const request = require('supertest');
const server = require('../src/server');

let app;

beforeEach((done) => {
	app = server.listen(5001, (err) => {
		if (err) return done(err);
		done();
	});
});

describe('Sample test endpoints', () => {
	it('should make a get request', async (done) => {
		request(app)
			.get('/')
			.expect(200, done);
	});
	it('should block api endpoints without auth', async (done) => {
		request(app)
			.get('/api/user')
			.expect(401, done);
	})
});

afterEach((done) => {
	return app && app.close(done);
});
