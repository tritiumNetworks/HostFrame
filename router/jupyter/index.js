module.exports = { _root: '/jupyter', _socket: false, _cors: false, _parser: [], ready }

/**
 * @param {import('../../class/Rapp')} app
 */
function ready (app) {
  app.get('/', (req, res) => { res.redirect('https://' + req.hostname + ':2053') })
}
