const greenlock = require('greenlock-express')
const challenge = require('le-challenge-fs')
const certbot = require('le-store-certbot')

module.exports = (config) => {
  return greenlock.create({
    server: config.server,

    challenges: {
      'http-01': challenge.create({ webrootPath: config.webrootPath })
    },
    store: certbot.create({ webrootPath: config.webrootPath }),

    approveDomains: (opts, certs, cb) => {
      if (certs) {
        opts.domains = certs.altnames
      } else {
        opts.email = config.email
        opts.agreeTos = true
      }

      cb(null, { options: opts, certs: certs })
    }
  })
}
