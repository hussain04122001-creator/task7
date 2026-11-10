const { test, after } = require('node:test');
const assert = require('node:assert');
const app = require('../index');

const server = app.listen(0);
const baseUrl = `http://127.0.0.1:${server.address().port}`;

after(() => server.close());

test('Home page should return application details', async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.status, 'Running');
});

test('Health endpoint should return Healthy', async () => {
    const response = await fetch(`${baseUrl}/health`);
    const data = await response.json();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.status, 'Healthy');
});
