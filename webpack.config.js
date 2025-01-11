const path = require('path');

module.exports = {
	entry: './themes/univer/assets/js/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve('themes','univer','assets','js')
	}
};
