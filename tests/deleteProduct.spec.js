
const { test, expect } = require('@playwright/test');
const { logResponse } = require('./utils/logger');

test('Delete product - positive', async ({ request }) => {
  const response = await request.delete('/products/1');
  const body = await logResponse(response);

  expect(response.status()).toBe(200);
  expect(body).toHaveProperty('id');
});

test('Delete product - negative (non-existent ID)', async ({ request }) => {
  const response = await request.delete('/products/99999');
  const body = await logResponse(response);

  expect(response.status()).toBe(404);
  expect(body).toHaveProperty('message');
});
