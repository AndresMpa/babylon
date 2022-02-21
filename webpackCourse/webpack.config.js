const path = require("path");

module.export = {
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	resolve: {
		extentions: ['.js']
	}
}
