// Transpiling using Babel so we can use some of the more modern ES features (eg `import`)
require('babel-register')({
  presets: ['es2015-node']
})

require('./index.js')
