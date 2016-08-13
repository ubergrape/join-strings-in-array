var conf = require('./webpack.config.common');

conf.entry = {
  index: './src/index.js'
}
conf.output.path = './dist'

module.exports = conf
