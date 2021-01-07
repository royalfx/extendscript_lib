// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @param {any} v1 
 * @param {any} v2 
 * @param {number} threshold 
 * 
 * @returns {boolean}
 */
function as_dataCheckEquals(v1, v2, threshold) {

	// Check arguments
	threshold = threshold || 0.0000000000001;
	if (typeof (v1) != typeof (v2)) {
		return false;
	}

	// Check type
	if (typeof (v1) == "string") {
		// STRING
		return v1 == v2;
	} else if (typeof (v1) == "number") {
		// NUMBER
		return (Math.abs(v1 - v2) < threshold);
	} else if (typeof (v1) == "boolean") {
		// BOOLEAN
		return v1 == v2;
	} else if (typeof (v1) == "object") {
		if ((v1 instanceof Array) && (v2 instanceof Array)) {
			// OBJECT ARRAY
			if (v1.length != v2.length) {
				return false;
			}
			for (var i = 0; i < v1.length; i++) {
				if (!as_dataCheckEquals(v1[i], v2[i], threshold)) {
					return false;
				}
			}
			return true;
		}
		// OBJECT
		return v1 === v2;
	} else {
		// UNACCOUNTED CASE
		return false;
	}
}
