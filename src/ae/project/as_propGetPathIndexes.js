// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Nov 15 2019
 * 
 * @param {*} prop Layer or Property
 * @requires {@link as_propIsLayer} 
 * @returns {Array}
 */
function as_propGetPathIndexes(prop) {
	var path = [];
	while (prop) {
		if (as_propIsLayer(prop)) {
			path.unshift(prop.index);
		} else {
			path.unshift(prop.propertyIndex);
		}
		prop = prop.parentProperty;
	}
	return path;
}