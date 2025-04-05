
const { test, expect } = require('@playwright/test');
const { logResponse } = require('./utils/logger');

test('Create product - positive', async ({ request }) => {
  const response = await request.post('/products/add', {
    data: { title: 'BMW Pencil', description: 'Product description', price: 100 }
  });
  const body = await logResponse(response);

  expect(response.status()).toBe(201);
  expect(body).toHaveProperty('id');
  expect(body.title).toBe('BMW Pencil');
});

test('Create product - negative (missing title)', async ({ request }) => {
  const response = await request.post('/products/add', {
    data: { description: 'Product description', price: 100 }
  });
  const body = await logResponse(response);

  expect(response.status()).toBe(404);
  expect(body).toHaveProperty('message');
});
