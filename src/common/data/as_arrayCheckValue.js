// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description
 * @param val {any}
 * @param arr {Array}
 * @returns {number} Index
 */
function as_arrayCheckValue(val, arr) {
	for (var i = 0, len = arr.length; i < len; i++) {
		if (val == arr[i]) {
			return i;
		}
	}
	return -1;
}
