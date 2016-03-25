import _ from 'lodash'

exports.createProcessor = function createProcessor (context) {
  return function processor (element) {
    return _.assign({}, element, {context})
  }
}
