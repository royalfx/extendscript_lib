// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.4
// date: Oct 27 2019

/**
 * 
 * @param {string} str 
 */
function as_stringClearFirstLastSpaces(str) {
	while (check(str.charAt(0))) {
		str = str.substr(1);
	}
	while (check(str.charAt(str.length - 1))) {
		str = str.substr(0, str.length - 1);
	}
	return str;

	function check(chr) {
		return (chr === " ") || (chr === "\n") || (chr === "\r") || (chr === "\t");
	}
}
