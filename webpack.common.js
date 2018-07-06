const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        './src/index.js',
        // './src/component/input/Form.css'
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            
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