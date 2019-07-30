// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.2
// date: Jul 23 2019

/**
 * @description MAKE ARRAY UNIQUE
 * @param
 */
function as_arrayMakeUnique(arr) {
	var checked = {};
	var arrNew = [];
	for (var i = 0, len = arr.length, item; i < len; i++) {
		item = arr[i];
		if (checked[item] !== 1) {
			checked[item] = 1;
			arrNew.push(item);
		}
	}
	return arrNew;
}