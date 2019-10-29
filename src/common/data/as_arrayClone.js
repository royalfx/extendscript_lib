// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.3
// date: Mon Feb 05 2018

/**
 * 
 * @description Clone array
 * @param arr {array}
 */
function as_arrayClone(arr) {
	var seen = {};
	var out = [];
	var len = arr.length;
	var j = 0;
	for (var item, i = 0; i < len; i++) {
		item = arr[i];
		if (seen[item] !== 1) {
			seen[item] = 1;
			out[j++] = item;
		}
	}
	return out;
}