// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 17 2019
 * 
 * @param prop {Property}
 * @param keyStart {number} Kei index
 * @param numKeyframes {number}
 */
function as_keysHold(prop, keyStart, numKeyframes) {
	
	// Check arguments
	keyStart = (keyStart === undefined) ? 1 : keyStart;
	numKeyframes = (numKeyframes === undefined) ? prop.numKeys : numKeyframes;

	// DO
	for (var k = 0; k < numKeyframes; k++) {
		prop.setInterpolationTypeAtKey(keyStart + k, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
	}
}
