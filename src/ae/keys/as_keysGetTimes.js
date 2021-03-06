// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date 03 Dec 2019
 * @param prop {Property}
 * @returns {Array}
 */
function as_keysGetTimes(prop) {
	var list = [];
	for (var k = 1, numKeys = prop.numKeys; k <= numKeys; k++) {
		list.push(prop.keyTime(k));
	}
	return list;
}
