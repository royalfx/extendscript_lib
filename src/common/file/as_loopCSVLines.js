// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Aug 02 2019
 * 
 * @param {File} file 
 * @param {Function} func 
 * @param {Array} args
 */
function as_loopCSVLines(file, func, args) {

	// Check arguments
	if (args === undefined) {
		args = [];
	}

	// Read
	var strCSV = as_fileRead(file);

	// Parse
	var lines = strCSV.split("\n");

	// Vars
	var results = [];

	// Loop layers
	for (var l = 0, len = lines.length, line, result; l < len; l++) {
		line = lines[l];

		// Do
		result = func.apply(undefined, [line].concat(args));
		if (result !== undefined) {
			results.push(result);
		}
	}

	// Return
	return results;
}