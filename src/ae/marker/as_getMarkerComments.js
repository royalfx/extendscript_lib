// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Apr 11 2020
 * 
 * @param {PropertyGroup} markerProp
 * @return {Array}
 */
function as_getMarkerComments(markerProp) {
	var list = [];
	for (var k = 1, numKeys = markerProp.numKeys; k <= numKeys; k++) {
		list.push(markerProp.keyValue(k).comment);
	}
	return list;
}
