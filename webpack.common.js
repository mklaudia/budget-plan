const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        './src/index.js',
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            
          },
          {
            test:/\.less$/,
            use:['style-loader','css-loader', 'less-loader'],
            exclude: /node_modules/
         },
         {
          test:/\.(s*)css$/,
          use:['style-loader','css-loader', 'sass-loader'],
          exclude: /node_modules/
          },
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