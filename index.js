const pathLib = require('path');

// load data bases
const DB= {
	msOffice: require('./db/ms-office.json'),
	openOffice: require('./db/open-office.json')
};

// prepare a set of all extensions
var extSet = new Set()
for(k in DB){
	v = DB[k]
	for(k2 in v){
		v2 = v[k2]
		for(k3 in v2){
			tb = v2[k3]
			for(var i=0, len = tb.length; i < len; ++i)
				if(tb[i])
					extSet.add(tb[i])
		}
	}
}

/**
 * check if a file is of type office
 * @param {string} path file path
 */
module.exports.isOffice = function(path){
	ext = pathLib.extname(path).substr(1).toLowerCase();
	return extSet.has(ext);
};