// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 17 2019
 * 
 * @description Adds or replace characters to the Marker property
 * @param markerProp {Marker}
 * @param comment {String} marker comment!
 * @param step {Number}
 * @param from {Number}
 * @param count {Number}
 * @param replaceAll {Boolean}
 */
function as_addMarkerEach(markerProp, comment, step, count, fromTime, replaceAll) {
	
	// VARS
	var t;

	// PRE
	if (replaceAll) {
		t = fromTime;

		// CLEAR
		while (markerProp.numKeys > 0) {
			markerProp.removeKey(markerProp.numKeys);
		}
	} else {
		if (markerProp.numKeys > 0) {
			t = markerProp.keyTime(markerProp.numKeys) + step;
		} else {
			t = fromTime;
		}
	}

	// ADD MARKERS
	for (var c = 0; c < count; c++) {
		markerProp.setValueAtTime(t + c * step, new MarkerValue(comment));
	}
}
