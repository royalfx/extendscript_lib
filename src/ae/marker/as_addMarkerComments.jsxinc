// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Apr 11 2020
 * 
 * @param {PropertyGroup} markerProp
 * @param {Array} comments
 * @param {number} step
 * @param {boolean} replaceAll
 * @description Adds or replace comments in the Marker property
 * @returns {void}
 */
function as_addMarkerComments(markerProp, comments, step, replaceAll) {
	var t = 0;
	if (replaceAll) {
		while (markerProp.numKeys > 0) {
			markerProp.removeKey(markerProp.numKeys);
		}
	} else {
		if (markerProp.numKeys > 0) {
			t = markerProp.keyTime(markerProp.numKeys) + step;
		}
	}
	for (var c = 0, len = comments.length; c < len; c++) {
		markerProp.setValueAtTime(t + c * step, new MarkerValue(comments[c]));
	}
}
