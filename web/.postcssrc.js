// https://github.com/michael-ciniawsky/postcss-load-config
var autoprefixer = require('autoprefixer')
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: [
        'ios >= 4',
    	'android >= 2.1',
    	'ie_mob >= 10',
    	'ie >= 9',
    	'Firefox >= 20'
    ]
  }
}

//
//
// var AUTOPREFIXER_BROWSERS = [
	// 'ios >= 4',
	// 'android >= 2.1',
	// 'ie_mob >= 10',
	// 'ie >= 9',
	// 'Firefox >= 20'
// ];
// module.exports = {
// 	plugins: {
// 		autoprefixer: AUTOPREFIXER_BROWSERS
// 	}
// }
