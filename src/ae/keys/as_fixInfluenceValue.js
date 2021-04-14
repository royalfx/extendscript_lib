// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 17 2019
 * 
 * @param influenceValue {number}
 * @param prop {Property}
 * @param keyIndex {number}
 * @param direction {string}
 */
function as_fixInfluenceValue(influenceValue, prop, keyIndex, direction) {

	// VARS
	var valNew = influenceValue;

	// CHECK DIR
	if (direction === "in") {
		if (prop.keyInInterpolationType(keyIndex) !== KeyframeInterpolationType.HOLD) {
			if (influenceValue < 0.100000) {
				valNew = 0.100000;
			} else if (influenceValue > 100) {
				valNew = 100;
			}
		}
	} else if (direction === "out") {
		if (prop.keyOutInterpolationType(keyIndex) !== KeyframeInterpolationType.HOLD) {
			if (influenceValue < 0.100000) {
				valNew = 0.100000;
			} else if (influenceValue > 100) {
				valNew = 100;
			}
		}
	}

	// Return
	return valNew;
}
