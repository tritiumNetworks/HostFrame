/** @type {import('express').Application} */
let appl

/** @class */
class Rapp {
  constructor (root) {
    this.root = root
  }

  /** @param {reqandres} cb */
  get (path, cb) {
    appl.get(this.root + path, cb)
  }

  /** @param {reqandres} cb */
  put (path, cb) {
    appl.put(this.root + path, cb)
  }

  /** @param {reqandres} cb */
  post (path, cb) {
    appl.post(this.root + path, cb)
  }

  /** @param {reqandres} cb */
  all (path, cb) {
    appl.all(this.root + path, cb)
  }
}

module.exports = Rapp
module.exports.reg = (app) => { appl = app }

/**
 * @callback reqandres
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
