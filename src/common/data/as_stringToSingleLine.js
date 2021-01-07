// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php


/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description To single line
 * @param str {string}
 */
function as_stringToSingleLine(str) {
	return as_stringClearLineBreaks(str).replace(new RegExp("\n", "g"), " ");
}
