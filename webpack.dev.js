const merge = require('webpack-merge');

const common = require('./webpack.common');

console.log("#############   DEV Build   #################");
module.exports = merge (common, {
  mode: "development"
});