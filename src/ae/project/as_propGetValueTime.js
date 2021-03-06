// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Get value time
 * @param {*} prop 
 * @param {*} valueToFind 
 * @param {number} timeStart 
 * @param {number} timeEnd 
 * @param {boolean} preExpression 
 * @param {number} valueThreshold 
 * @param {number} timeThreshold 
 */
function as_propGetValueTime(prop, valueToFind, timeStart, timeEnd, preExpression, valueThreshold, timeThreshold) {

	// Check arguments
	valueThreshold = (valueThreshold === undefined) ? 0.025 : valueThreshold;
	timeThreshold = (timeThreshold === undefined) ? 0.00000001 : timeThreshold;

	// Vars
	var stack = 0;
	var stackLimit = 200;

	// If wrong time range
	if (timeStart > timeEnd) {
		// alert("Error. Wrong time range! timeStart more than timeEnd. Property: " + as_toString(prop) + ", timeStart: " + timeStart + ", timeEnd: " + timeEnd, true);
		return null;
	}

	// If same time
	if (Math.abs(timeStart - timeEnd) <= timeThreshold) {
		// alert("Error. Time range is less than timeThreshold! Property: " + as_toString(prop) + ", timeStart: " + timeStart + ", timeEnd: " + timeEnd, true);
		// return null;
		var t = timeStart + (timeEnd - timeStart) * 0.5;
		var v = prop.valueAtTime(t, preExpression);
		var diff = Math.abs(v2 - v1);
		if (diff > valueThreshold) {
			// alert("Error. Value " + valueToFind + " not found in time range! Property: " + as_toString(prop) + ", timeStart: " + timeStart + ", timeEnd: " + timeEnd, true);
			return null;
		}
	}

	// Vars
	var v1 = prop.valueAtTime(timeStart + 0.00005, preExpression);
	var v2 = prop.valueAtTime(timeEnd - 0.00005, preExpression);

	if (Math.abs(v1 - valueToFind) <= valueThreshold) {
		alert("as_propGetValueTime -->> Return timeStart!");
		return timeStart + 0.00005;
	}
	if (Math.abs(v2 - valueToFind) <= valueThreshold) {
		alert("as_propGetValueTime -->> Return timeEnd!");
		return timeEnd - 0.00005;
	}
	var dir = v2 > v1 ? 1 : -1;
	var t, v, diff = Math.abs(v2 - v1);
	var tStart = timeStart, tEnd = timeEnd;
	while (diff > valueThreshold) {
		t = tStart + (tEnd - tStart) * 0.5;
		v = prop.valueAtTime(t, preExpression);
		if (v > valueToFind) {
			if (dir == 1) {
				tEnd = t;
			}
			else {
				tStart = t;
			}
		}
		else {
			if (dir == 1) {
				tStart = t;
			}
			else {
				tEnd = t;
			}
		}
		diff = Math.abs(v - valueToFind);
        /*if((tEnd - tStart) <= timeThreshold) {
            // alert("Error. timeThreshold exceeded! Value " + valueToFind + " not found in time range! Property: " + as_toString(prop) + ", timeStart: " + timeStart + ", timeEnd: " + timeEnd, true);
            return null;
        }*/
		stack++;
		if (stack > stackLimit) {
			// alert("Error. Stack overflow! Property: " + as_toString(prop) + ", timeStart: " + timeStart + ", timeEnd: " + timeEnd, true);
			return null;
		}
	}
	return t;
}
