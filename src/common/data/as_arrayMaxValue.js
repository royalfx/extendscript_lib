// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Aug 09 2019
 * 
 * @description Only one level array with numbers
 * @param arr {Array}
 * @returns {number} Max number
 */
function as_arrayMaxValue(arr) {
	var max = 0, i, len = arr.length;
	for (i = 0; i < len; i++) {
		max = Math.max(max, arr[i]);
	}
	return max;
}
