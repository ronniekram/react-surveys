// keys.js - figure out which set of credentials to return

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./devel');
}