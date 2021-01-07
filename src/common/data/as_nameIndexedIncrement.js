// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Nov 22 2019
 * 
 * @param {string} name
 * @param {Function} checkFunc Function that returns true if name available
 * @param {number} len (Optional)
 * @param {string} delimiter (Optional)
 * @description Find new available index
 * @returns {string} A new name with incremented index
 */
function as_nameIndexedIncrement(name, checkFunc, len, delimiter) {
	if (typeof name !== "string") {
		return null;
	}
	if (typeof checkFunc !== "function") {
		return null;
	}

	// Check arguments
	delimiter = (delimiter === undefined) ? "_" : delimiter;
	len = (len === undefined) ? 2 : len;

	// Get current index
	var index,
		suffix = name.split(delimiter).pop();
	if (suffix && (suffix != "") && (suffix.match(RegExpPattern.NUMBERS) === null)) {
		index = parseInt(suffix);
	} else {
		index = 2;
	}

	// Check
	var nameNew = name;
	var clearName = as_nameIndexedClear(name);
	while (checkFunc.apply(null, [nameNew])) {
		nameNew = (clearName + delimiter + ("000000000" + index).substr(-len));
		index++;
		// Fit length
		len = Math.max(len, index.toString().length);
	}

	return nameNew;
}
