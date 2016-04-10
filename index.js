const _ = require('lodash')

exports.createProcessor = function createProcessor (value, name) {
  return function processor (element) {
    // don't want to use babel to support es6 syntax
    var obj = {}
    obj[name] = value
    return _.assign({}, element, obj)
  }
}
