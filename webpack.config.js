const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: ['babel-polyfill', path.resolve(__dirname, 'index.js')],

	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'restaurance.bundle.js',
		library: 'restaurance',
		libraryTarget: 'umd'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['env']
				},
				exclude: /node_modules/
			},

			{
				test: /\.(png|mp3)$/,
				loader: 'url-loader',
				options: {
					name: '[name].[ext]?[hash]',
					limit: 10000
				}
			}
		]
	},

	devtool: '#eval-source-map'
};

if(process.env.NODE_ENV === 'production'){
	module.exports.devtool = '#source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	]);
}
