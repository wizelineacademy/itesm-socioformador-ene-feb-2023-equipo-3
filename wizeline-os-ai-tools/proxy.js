const cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
  originWhitelist: [], // Permite todas las solicitudes
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(3000, 'localhost', function() {
  console.log('Servidor de proxy cors-anywhere iniciado en localhost:3000...');
});
