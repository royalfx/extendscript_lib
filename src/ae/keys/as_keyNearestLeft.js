// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Oct 18 2019
 * 
 * @param prop {Property}
 * @param t {number} Time
 * @param threshold {number}
 * @param alertError {boolean}
 * @returns {number} Key index
 */
function as_keyNearestLeft(prop, t, threshold, alertError) {
	
	// Check arguments
	threshold = threshold || 0.00005;

	// Check num keys
	if (prop.numKeys == 0) {
		if (alertError) {
			alert("Error. No keyframes found in property " + prop.name, true);
		}
		return null;
	}

	// Check keys left
	if (prop.keyTime(1) > t) {
		if (alertError) {
			alert("Error. No keyframes before time: " + t + ", in property " + prop.name + ".", true);
		}
		return null;
	}

	// Do
	var keyIndex = prop.nearestKeyIndex(t);
	if (prop.keyTime(keyIndex) > (t + threshold)) {
		keyIndex -= 1;
	}

	return keyIndex;
}
