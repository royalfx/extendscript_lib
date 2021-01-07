// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Aug 23 2019
 * 
 * @param {Folder} dir 
 * @param {boolean} intoSubDirs 
 * @param {Function} func 
 * @param {array} args 
 * @param {array} filterDirsNames directories valid names
 */
function as_loopDirectories(dir, intoSubDirs, func, args, filterDirsNames) {

    // Vars
    var results = [];
	
	// Check
	var nameMatch = (filterDirsNames === undefined) || (filterDirsNames.length == 0) || (as_arrayCheckValue(dir.name, filterDirsNames) >= 0);

	// Do
	if(nameMatch) {
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
				results = results.concat(as_loopDirectories(subDir, intoSubDirs, func, args, filterDirsNames));
			}
		}
	}

    // Return
    return results;
}