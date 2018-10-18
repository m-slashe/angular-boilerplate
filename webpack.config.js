/* eslint-disable strict, no-console */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const isProduction = global.process.argv.find(param => param.indexOf('production') !== -1);

const hash = isProduction ? 'chunkhash' : 'hash';
console.log(`Utilizando ${hash}`);

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist', 'html5'),
		filename: `[name].[${hash}].js`,
	},
	devtool: isProduction ? 'hidden-source-map' : 'inline-source-map',
	optimization: {
		runtimeChunk: true,
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader', // translates CSS into CommonJS
					'sass-loader', // compiles Sass to CSS, using Node Sass by default
				],
			},
			{
				loader: 'url-loader',
				test: /\.(svg|eot|ttf|woff|woff2|png|gif)?$/,
				options: {
					limit: 1000, // if less than 10 kb, add base64 encoded image to css
					name: 'assets/[hash].[ext]', // if more than 10 kb move to this folder in build using file-loader
				},
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
				},
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			'window.jQuery': 'jquery',
			jQuery: 'jquery',
		}),
		new CleanWebpackPlugin(['dist']),
	],
};
