const greenlock = require('greenlock-express')
const challenge = require('le-challenge-fs')
const certbot = require('le-store-certbot')

module.exports = (config) => {
  return greenlock.create({
    server: config.letsEncrypt.server,

    challenges: {
      'http-01': challenge.create({ webrootPath: config.letsEncrypt.webrootPath })
    },
    store: certbot.create({ webrootPath: config.letsEncrypt.webrootPath }),

    approveDomains: (opts, certs, cb) => {
      if (certs) {
        opts.domains = certs.altnames
      } else {
        opts.email = config.letsEncrypt.email
        opts.agreeTos = true
      }

      cb(null, { options: opts, certs: certs })
    }
  })
}
