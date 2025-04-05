
const { test, expect } = require('@playwright/test');
const { logResponse } = require('./utils/logger');

test('Update product - positive', async ({ request }) => {
  const response = await request.put('/products/1', {
    data: { title: 'Updated Product', price: 150 }
  });
  const body = await logResponse(response);

  expect(response.status()).toBe(200);
  expect(body.title).toBe('Updated Product');
  expect(body.price).toBe(150);
});

test('Update product - negative (invalid ID)', async ({ request }) => {
  const response = await request.put('/products/99999', {
    data: { title: 'Non-existent Product' }
  });
  const body = await logResponse(response);

  expect(response.status()).toBe(404);
  expect(body).toHaveProperty('message');
});
