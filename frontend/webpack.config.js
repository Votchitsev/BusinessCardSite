const path = require('path');

module.exports = {
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'static/frontend/'),
		filename: 'main.js',
	},
	watch: true,
	devtool: 'source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(svg|png|gif|jpg)$/i,
				type: 'asset/resource',
			},
		],
	},
};
