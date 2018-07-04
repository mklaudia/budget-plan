const merge = require('webpack-merge');

const common = require('./webpack.common');

console.log("#############   PROD Build   #################");
module.exports = merge (common, {
  mode: "production"
});