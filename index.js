const pathLib = require('path');

// load data bases
const DB= {
	msOffice: require('./db/ms-office.json'),
	openOffice: require('./db/open-office.json')
};

// prepare a set of all extensions
var extSet = []
for(k in DB){
	v = DB[k]
	for(k2 in v){
		tb = v[k2]
		for(var i=0, len = tb.length; i < len; ++i)
			if(extSet.indexOf(tb[i]) === -1)
				extSet.push(tb[i])
	}
}

/**
 * check if a file is of type office
 * @param {string} path file path
 */
module.exports.isOffice = function(path){
	ext = pathLib.extname(path).toLowerCase();
	return extSet.indexOf(ext) >= 0
};