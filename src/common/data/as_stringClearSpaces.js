// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description Claer spaces
 * @param str {string}
 */
function as_stringClearSpaces(str) {
	return as_stringToSingleLine(str).replace(new RegExp(" ", "g"), "");
}
