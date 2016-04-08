const _ = require('lodash')

exports.createProcessor = function createProcessor (value, name) {
  return function processor (element) {
    return _.assign({}, element, {[name]: value})
  }
}
