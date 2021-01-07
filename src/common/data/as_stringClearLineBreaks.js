// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description Clear carriage return
 * @param str {string}
 */
function as_stringClearLineBreaks(str) {
	return str.replace(new RegExp("\r", "g"), "\n");
}
