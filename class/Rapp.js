/** @type {import('express').Application} */
let appl

/** @class */
class Rapp {
  constructor (root, host) {
    this.root = root
    this.host = host
  }

  /** @param {reqandres} cb */
  get (path, cb) {
    appl.get(this.root + path, (req, res) => {
      if (!this.host) return cb(req, res)
      if (this.host === req.hostname) return cb(req, res)
    })
  }

  /** @param {reqandres} cb */
  put (path, cb) {
    appl.put(this.root + path, (req, res) => {
      if (!this.host) return cb(req, res)
      if (this.host === req.hostname) return cb(req, res)
    })
  }

  /** @param {reqandres} cb */
  post (path, cb) {
    appl.post(this.root + path, (req, res) => {
      if (!this.host) return cb(req, res)
      if (this.host === req.hostname) return cb(req, res)
    })
  }

  /** @param {reqandres} cb */
  all (path, cb) {
    appl.all(this.root + path, (req, res) => {
      if (!this.host) return cb(req, res)
      if (this.host === req.baseUrl) return cb(req, res)
    })
  }
}

module.exports = Rapp
module.exports.reg = (app) => { appl = app }

/**
 * @callback reqandres
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
