/* eslint-disable strict, import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

const karmaWebpackConfig = merge(webpackConfig, {
	mode: 'development',
	module: {
		rules: [
			{
				enforce: 'post',
				test: /\.ts$/,
				exclude: /((node_modules|bower_components)\/|spec)/,
				use: {
					loader: 'istanbul-instrumenter-loader',
					options: { esModules: true },
				},
			},
		],
	},
});

karmaWebpackConfig.optimization = undefined;
karmaWebpackConfig.entry = undefined;

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: ['test/index.js'],
		preprocessors: {
			'test/index.js': ['webpack', 'sourcemap'],
		},
		webpack: karmaWebpackConfig,
		reporters: ['spec', 'coverage-istanbul'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		webpackServer: { noInfo: true },
		browsers: ['ChromeHeadlessNoSandbox'],
		customLaunchers: {
			ChromeHeadlessNoSandbox: {
				base: 'ChromeHeadless',
				flags: ['--no-sandbox'],
			},
		},
		plugins: [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-spec-reporter',
			'karma-webpack',
			'karma-sourcemap-loader',
			'karma-coverage',
			'karma-coverage-istanbul-reporter',
		],
		singleRun: true,
		concurrency: Infinity,
	});
};
