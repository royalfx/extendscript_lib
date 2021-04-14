// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Mar 20 2021
 * 
 * @param {Folder} dir 
 * @param {boolean} intoSubDirs 
 * @param {Function} func 
 * @param {Array} args
 * @param {Array} skipDirs ["foldername"] (Optional)
 */
function as_loopDirectories(dir, intoSubDirs, func, args, skipDirs) {

    // Vars
    var results = [];
	
	// Check
	var skipFile = (skipDirs !== undefined) && (skipDirs.length > 0) && (as_arrayCheckValue(dir.name, skipDirs) >= 0);

	// Do
	if (!skipFile) {
		var result = func.apply(undefined, [dir].concat(args || []));
		if(result !== undefined) {
			results.push(result);
		}
	}

	// Loop child dirs
	if(intoSubDirs) {
		var arrSubDirs = dir.getFiles();
		for (var d = 0, subDir, result; d < arrSubDirs.length; d++) {
			subDir = arrSubDirs[d];
	
			// Check is folder
			if(subDir instanceof Folder) {
				results = results.concat(as_loopDirectories(subDir, intoSubDirs, func, args, skipDirs));
			}
		}
	}

    // Return
    return results;
}