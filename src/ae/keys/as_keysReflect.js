// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 17 2019
 * 
 * @description If scale roving keys result may be different!
 * 
 * @param propSource {Property}
 * @param propTarget  {Property}
 * @param timeMirror {number}
 * @param scaleTime {number}
 * @param keyStart {number}
 * @param numKeyframes {number}
 */
function as_keysReflect(propSource, propTarget, timeMirror, scaleTime, keyStart, numKeyframes) {
	
	// CHEK ARGS
	if (propSource.propertyValueType !== propTarget.propertyValueType) {
		throw new Error("Property type mismatch!");
	}
	keyStart = keyStart || 1;
	numKeyframes = numKeyframes || (propSource.numKeys - keyStart + 1);
	scaleTime = scaleTime || 1;

	// VARS END
	var inxKeyEndSource = keyStart + numKeyframes - 1;
	var timeKeyEndSource = propSource.keyTime(keyStart + numKeyframes - 1);

	// CHECK TIME
	if (timeKeyEndSource > timeMirror) {
		// alert("Error. Wrong keys range! timeMirror: " + timeMirror, true);
		return null;
	}

	// VARS
	var space = timeMirror - timeKeyEndSource;
	var arrTimes = [];
	var arrValues = [];
	var inxKeySource, inxKeyTarget;

	// VALUE
	for (var k = 0; k < numKeyframes; k++) {
		inxKeySource = inxKeyEndSource - k;
		arrTimes.push(timeMirror + space + (timeMirror - propSource.keyTime(inxKeySource) - space) * scaleTime);
		arrValues.push(propSource.keyValue(inxKeyEndSource - k));
	}
	propTarget.setValuesAtTimes(arrTimes, arrValues);

	// VARS
	var inxKeyStartTarget = propTarget.nearestKeyIndex(arrTimes[0]);
	// var inxKeyEndTarget = propTarget.nearestKeyIndex(arrTimes[arrTimes.length - 1]);

	// EASING
	var easeIn, easeOut;
	for (var k = 0; k < numKeyframes; k++) {
		inxKeySource = inxKeyEndSource - k;
		inxKeyTarget = inxKeyStartTarget + k;

		// TEMPORAL
		propTarget.setTemporalContinuousAtKey(inxKeyTarget, propSource.keyTemporalContinuous(inxKeySource));
		propTarget.setTemporalAutoBezierAtKey(inxKeyTarget, propSource.keyTemporalAutoBezier(inxKeySource));

		// INVERT EASING
		easeIn = propSource.keyInTemporalEase(inxKeySource);
		easeOut = propSource.keyOutTemporalEase(inxKeySource);
		if (propSource.propertyValueType === PropertyValueType.OneD) {
			for (var i = 0; i < easeIn.length; i++) {
				easeIn[i].speed = easeIn[i].speed * -1;
				easeOut[i].speed = easeOut[i].speed * -1;
			}
		}
		propTarget.setTemporalEaseAtKey(inxKeyTarget, easeOut, easeIn);
		//
		propTarget.setInterpolationTypeAtKey(inxKeyTarget, propSource.keyOutInterpolationType(inxKeySource), propSource.keyInInterpolationType(inxKeySource));
		if (propSource.isSpatial) {

			// SPATIAL
			propTarget.setSpatialContinuousAtKey(inxKeyTarget, propSource.keySpatialContinuous(inxKeySource));
			propTarget.setSpatialAutoBezierAtKey(inxKeyTarget, propSource.keySpatialAutoBezier(inxKeySource));
			propTarget.setSpatialTangentsAtKey(inxKeyTarget, propSource.keyOutSpatialTangent(inxKeySource), propSource.keyInSpatialTangent(inxKeySource));
		}
	}

	// ROVING
	if (propSource.isSpatial) {
		for (var k = 0; k < numKeyframes; k++) {
			propTarget.setRovingAtKey(inxKeyStartTarget + k, propSource.keyRoving(inxKeyEndSource - k));
		}
	}
}
