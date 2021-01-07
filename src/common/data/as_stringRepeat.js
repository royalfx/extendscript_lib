// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Dec 02 2019
 * 
 * @param {string} str
 * @param {number} times
 * @returns {string}
 */
function as_stringRepeat(str, times) {
	if (typeof times !== "number") {
		return null;
	}
	var repeatedString = "";
	while (times > 0) {
		repeatedString += str;
		times--;
	}
	return repeatedString;
}
