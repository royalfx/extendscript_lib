// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Jan 23 2020
 * 
 * @param {Property} prop
 * @param {Array} keyTimesArray
 * @param {Array} easeInArray
 * @param {Array} easeOutArray
 * @param {Array} keyInterpolationArray
 */
function as_applyEasing(prop, keyTimesArray, easeInArray, easeOutArray, keyInterpolationArray) {
	
	// Declare vars
	var k,
		len = keyTimesArray.length,
		inx,
		easeIn0,
		easeOut0,
		easeIn1,
		easeOut1,
		easeIn2,
		easeOut2;

	// TwoD
	if (prop.propertyValueType === PropertyValueType.TwoD) {
		for (k = 0; k < len; k++) {
			inx = prop.nearestKeyIndex(keyTimesArray[k]);
			easeIn0 = new KeyframeEase(easeInArray[0][k][0], easeInArray[1][k][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][k][0], easeOutArray[1][k][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][k][1], easeInArray[1][k][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][k][1], easeOutArray[1][k][1]);
			prop.setTemporalEaseAtKey(inx, [easeIn0, easeIn1], [easeOut0, easeOut1]);
			prop.setInterpolationTypeAtKey(inx, keyInterpolationArray[0][k], keyInterpolationArray[1][k]);
		}

	// ThreeD
	} else if (prop.propertyValueType === PropertyValueType.ThreeD) {
		for (k = 0; k < len; k++) {
			inx = prop.nearestKeyIndex(keyTimesArray[k]);
			easeIn0 = new KeyframeEase(easeInArray[0][k][0], easeInArray[1][k][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][k][0], easeOutArray[1][k][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][k][1], easeInArray[1][k][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][k][1], easeOutArray[1][k][1]);
			easeIn2 = new KeyframeEase(easeInArray[0][k][2], easeInArray[1][k][2]);
			easeOut2 = new KeyframeEase(easeOutArray[0][k][2], easeOutArray[1][k][2]);
			prop.setTemporalEaseAtKey(inx, [easeIn0, easeIn1, easeIn2], [easeOut0, easeOut1, easeOut2]);
			prop.setInterpolationTypeAtKey(inx, keyInterpolationArray[0][k], keyInterpolationArray[1][k]);
		}

	} else {
		for (k = 0; k < len; k++) {
			inx = prop.nearestKeyIndex(keyTimesArray[k]);
			// alert("easeIn0 : " + easeInArray[0][k].toString() + " | " + easeInArray[1][k].toString());
			// alert("easeOut0 : " + easeOutArray[0][k].toString() + " | " + easeOutArray[1][k].toString());
			easeIn0 = new KeyframeEase(easeInArray[0][k], easeInArray[1][k]);
			easeOut0 = new KeyframeEase(easeOutArray[0][k], easeOutArray[1][k]);

			if (keyInterpolationArray[1][k] !== KeyframeInterpolationType.HOLD) {
				prop.setTemporalEaseAtKey(inx, [easeIn0], [easeOut0]);

			} else {
				try {
					prop.setTemporalEaseAtKey(inx, [easeIn0]);
				} catch (err) {
					//TODO: Error then applied for checkbox keys
					alert(err.message, true);
				}
			}
			prop.setInterpolationTypeAtKey(inx, keyInterpolationArray[0][k], keyInterpolationArray[1][k]);
		}
	}
}
