const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './lesson-22/task22-1/src/js/index.js',
	output: {
		path: path.resolve(__dirname, './lesson-22/task22-1/dist/'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true,
					},
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
			new CssMinimizerPlugin(),
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './lesson-22/task22-1/src/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
			},
		}),
	],
};
