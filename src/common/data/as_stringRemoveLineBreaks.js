// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.3
// date: Mon Feb 05 2018

/**
 * 
 * @description REMOVE LINE BREAKS
 * @param str {string}
 */
function as_stringRemoveLineBreaks(str) {
	return str.replace(/[\n|\r]/g, "");
}
