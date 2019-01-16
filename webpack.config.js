const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'./src/main.js',
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'main.js',
	},
 	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					// loader: 'url-loader',
					loader: 'file-loader',
					options: { limit: 10000 }
				}]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
				}),
			},
		],
	},
	plugins: [
		new webpack.optimize.AggressiveMergingPlugin(),
    	new ExtractTextPlugin('styles.css'),
		new HtmlWebpackPlugin({ hash: false, template: './index.hbs' })
	],
	resolve: {
	    extensions: ['.js', '.jsx'],
		modules: [
			path.join(__dirname, 'node_modules'),
		],
	},
	devServer: {
		host: 'localhost',
		port: 3000,
		historyApiFallback: true,
		open: true,
	}
};


