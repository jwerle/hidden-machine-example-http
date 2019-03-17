const path = require('path')
module.exports = require('node-gyp-build')(path.resolve(__dirname, 'dist'))
