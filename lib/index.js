const http = require('http')
const server = module.exports = http.createServer((req, res) => req.pipe(res)).listen(0, () => {
  const { address, port } = server.address()
  console.log('listening on %s:%s', address, port);
})
