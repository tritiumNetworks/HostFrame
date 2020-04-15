module.exports = { _root: '/example', _socket: false, _cors: true, _parser: [], ready }

function ready (app) {
  console.log('example is loaded')
  app.get('/', (_req, res) => res.send('example!'))
}
