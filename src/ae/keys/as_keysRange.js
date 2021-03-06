// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Oct 18 2019
 * 
 * @param prop {Property}
 * @param timeStart {number}
 * @param timeEnd {number}
 * @param threshold {number}
 * @param alertError {boolean}
 * 
 * @return [key index, num keys]
 */
function as_keysRange(prop, timeStart, timeEnd, threshold, alertError) {
	
	// Check arguments
	threshold = threshold || 0.00005;

	// Check num keys
	if (prop.numKeys == 0) {
		if (alertError) {
			alert("Error. No keyframes found in property: " + as_toString(prop));
		}
		return null;
	}
	
	// Check wrong time range
	if (timeStart > timeEnd) {
		if (alertError) {
			alert("Error. Wrong time range! timeStart more than timeEnd. Property: " + as_toString(prop) + ", timeStart: " + timeStart + ", timeEnd: " + timeEnd, true);
		}
		return null;
	}

	// Check same time
	if (Math.abs(timeStart - timeEnd) <= threshold) {
		
		var middleKeyIndex = prop.nearestKeyIndex(timeStart + (timeEnd - timeStart) * 0.5);
		if (Math.abs(prop.keyTime(middleKeyIndex) - timeStart) > threshold) {
			if (alertError) {
				alert("Error. No keyframes in time range! Property: " + as_toString(prop) + ", timeStart: " + timeStart + ", timeEnd: " + timeEnd, true);
			}
			return null;
		} else {
			return [middleKeyIndex, 1];
		}
	}

	// Check keys in range
	var middleKeyIndex = prop.nearestKeyIndex(timeStart + (timeEnd - timeStart) * 0.5);
	if ((prop.keyTime(middleKeyIndex) < timeStart) || (prop.keyTime(middleKeyIndex) > timeEnd)) {
		if (alertError) {
			alert("Error. No keyframes in time range! Property: " + as_toString(prop) + ", timeStart: " + timeStart + ", timeEnd: " + timeEnd);
		}
		return null;
	}

	// Do
	var inxStart = as_keyNearestRight(prop, timeStart, threshold);
	var inxEnd = as_keyNearestLeft(prop, timeEnd, threshold);

	return [inxStart, inxEnd - inxStart + 1];
}
