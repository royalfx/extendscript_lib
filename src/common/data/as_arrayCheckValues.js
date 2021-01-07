// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jan 07 2021
 * @param {Array} valuesArr 
 * @param {Array} array
 * @returns {number} Number of found values
 */
function as_arrayCheckValues(valuesArr, array) {
	if (!(valuesArr instanceof Array)) {
		throw "An array is expected."
	}
	if (!(array instanceof Array)) {
		throw "An array is expected."
	}
	var counter = 0;
	for (var i = 0, iLen = array.length; i < iLen; i++) {
		for (var v = 0, vLen = valuesArr.length; v < vLen; v++) {
			if (valuesArr[v] == array[i]) {
				counter++;
			}
		}
	}
	return counter;
}
