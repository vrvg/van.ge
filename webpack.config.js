const path = require('path');

module.exports = {
	entry: './themes/univer/assets/js/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'themes','univer','assets','js')
	}
};
