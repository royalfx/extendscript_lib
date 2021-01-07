// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description
 * @param str {String}
 */
function as_stringCheckContainsChars(str, chars) {

	// Loop chars
	for (var i = 0, iLen = chars.length; i < iLen; i++) {
		if (str.indexOf(chars.charAt(i)) == -1) {
			return false;
		}
	}

	// Return
	return true;
}
