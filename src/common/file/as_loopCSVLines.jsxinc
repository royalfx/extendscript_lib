// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.0
// date: Aug 02 2019

/**
 * 
 * @param {File} file 
 * @param {Function} func 
 * @param {array} args
 */
function as_loopCSVLines(file, func, args) {

	// CHECK ARGS
	if (args === undefined) {
		args = [];
	}

	// READ
	var strCSV = as_fileRead(file);

	// PARSE
	var lines = strCSV.split("\n");

	// VARS
	var results = [];

	// LOOP LAYERS
	for (var l = 0, len = lines.length, line, result; l < len; l++) {
		line = lines[l];

		// DO
		result = func.apply(undefined, [line].concat(args));
		if (result !== undefined) {
			results.push(result);
		}
	}

	// RETURN
	return results;
}