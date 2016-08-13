var conf = require('./webpack.config.common');

conf.entry = {
  index: './src/tests.js'
}
conf.output.path = './tests'

module.exports = conf
