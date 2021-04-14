// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Mar 20 2021
 * 
 * @param {Folder} dir 
 * @param {boolean} intoSubfolders 
 * @param {Function} func 
 * @param {Array} args
 * @param {Array} filterFileExt ["js", "jsxinc"] (Optional)
 * @param {Array} skipFiles ["filename.js"] (Optional)
 * @returns {Array}
 */
function as_loopFiles(dir, intoSubfolders, func, args, filterFileExt, skipFiles) {
    
    // Check arguments
    if(args === undefined) {
        args = [];
    }

    // Vars
    var results = [];

	// Get content
    var content = dir.getFiles();
	var files = [];
	var subdirs = [];
	for (var i = 0; i < content.length; i++) {
		var item = content[i];
		if (item instanceof Folder) {
			subdirs.push(item);
		} else {
			files.push(item);
		}
	}
	subdirs.sort();
	files.sort();

	// Loop sudirs
	if (intoSubfolders) {
		for (var i = 0, subdir; i < subdirs.length; i++) {
			subdir = subdirs[i]
			results = results.concat(as_loopFiles(subdir, intoSubfolders, func, args, filterFileExt, skipFiles));
		}
	}
	
    // Loop files
	for (var i = 0, file, skipFile, extMatch, result; i < files.length; i++) {
		file = files[i];

		// Check
		skipFile = (skipFiles !== undefined) && (skipFiles.length > 0) && (as_arrayCheckValue(file.name, skipFiles) >= 0);
		extMatch = (filterFileExt === undefined) || (filterFileExt.length == 0) || (as_arrayCheckValue(as_getFileExtension(file), filterFileExt) >= 0);

		// Do
		if (!skipFile && extMatch) {
			result = func.apply(undefined, [file].concat(args));
			if (result !== undefined) {
				results.push(result);
			}
		}
    }

    return results;
}