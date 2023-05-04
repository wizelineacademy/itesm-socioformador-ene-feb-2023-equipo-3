const cors_proxy = require('cors-anywhere');

const PORT = process.env.PORT || 5000;

cors_proxy.createServer({
  originWhitelist: [],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(PORT, function () {
  console.log(`CORS Anywhere server is running on port ${PORT}`);
});
