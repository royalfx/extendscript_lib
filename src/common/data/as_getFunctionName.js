// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.0
// date: Oct 04 2019

/**
 * 
 * @description Get function name
 * @param {Function} func
 */
function as_getFunctionName(func) {
	var val = func.toString();
	val = val.substr(("function ").length);
	val = val.substr(0, val.indexOf("("));
	return val;
}
