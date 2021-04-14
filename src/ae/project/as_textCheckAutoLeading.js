// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Check is leading auto
 * @param {number} leading 
 * @param {number} fontSize 
 */
function as_textCheckAutoLeading(leading, fontSize) {
	var threshold = 0.1;
	return Math.abs(fontSize * 1.2 - leading) <= threshold;
}
