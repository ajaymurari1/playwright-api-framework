
const { test, expect } = require('@playwright/test');
const { logResponse } = require('./utils/logger');

test('Read product - positive', async ({ request }) => {
  const response = await request.get('/products/1');
  const body = await logResponse(response);

  expect(response.status()).toBe(200);
  expect(body.id).toBe(1);
});

test('Read product - negative (invalid ID)', async ({ request }) => {
  const response = await request.get('/products/99999');
  const body = await logResponse(response);

  expect(response.status()).toBe(404);
  expect(body).toHaveProperty('message');
});
