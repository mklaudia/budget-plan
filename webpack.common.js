const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
            ,
            use: ['babel-loader']
            
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.resolve(__dirname + '/dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
    new HTMLWebpackPlugin({
			template: 'index.html'
		})
  ]
  ,
	devServer: {
    contentBase: './dist',
    historyApiFallback: true,
		// hot: true
  }
}