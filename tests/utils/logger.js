
async function logResponse(response) {
  const status = response.status();
  const body = await response.json().catch(() => ({}));
  console.log(`Status: ${status}`, body);
  return body;
}

module.exports = { logResponse };
