// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 17 2019
 * 
 * @description If scale roving keys result may be different!
 * 
 * @param propSource		{Property}
 * @param propTarget		{Property}
 * @param timeStartTarget	{number}
 * @param scaleTime		{number}
 * @param keyStartSource	{number}
 * @param numKeyframes		{number}
 */
function as_keysCopy(propSource, propTarget, timeStartTarget, scaleTime, keyStartSource, numKeyframes) {
	
	// Check arguments
	if (propSource.propertyValueType !== propTarget.propertyValueType) {
		throw new Error("Property type mismatch!");
	}
	keyStartSource = keyStartSource || 1;
	numKeyframes = numKeyframes || (propSource.numKeys - keyStartSource + 1);
	scaleTime = scaleTime || 1;
	timeStartTarget = timeStartTarget || 0;

	// VARS
	var timeStartSource = propSource.keyTime(keyStartSource);
	var arrTimes = [];
	var arrValues = [];

	// VALUE
	for (var k = 0; k < numKeyframes; k++) {
		arrTimes.push(timeStartTarget + (propSource.keyTime(keyStartSource + k) - timeStartSource) * scaleTime);
		arrValues.push(propSource.keyValue(keyStartSource + k));
	}
	propTarget.setValuesAtTimes(arrTimes, arrValues);

	// VARS
	var inxKeyStartTarget = propTarget.nearestKeyIndex(arrTimes[0]);
	// var inxKeyEndTarget = propTarget.nearestKeyIndex(arrTimes[arrTimes.length - 1]);
	
	// EASING
	for (var k = 0, inxKeySource, inxKeyTarget; k < numKeyframes; k++) {
		inxKeySource = keyStartSource + k;
		inxKeyTarget = inxKeyStartTarget + k;

		// TEMPORAL
		propTarget.setTemporalContinuousAtKey(inxKeyTarget, propSource.keyTemporalContinuous(inxKeySource));
		propTarget.setTemporalAutoBezierAtKey(inxKeyTarget, propSource.keyTemporalAutoBezier(inxKeySource));
		propTarget.setTemporalEaseAtKey(inxKeyTarget, propSource.keyInTemporalEase(inxKeySource), propSource.keyOutTemporalEase(inxKeySource));
		propTarget.setInterpolationTypeAtKey(inxKeyTarget, propSource.keyInInterpolationType(inxKeySource), propSource.keyOutInterpolationType(inxKeySource));

		// SPATIAL
		if (propSource.isSpatial) {
			propTarget.setSpatialContinuousAtKey(inxKeyTarget, propSource.keySpatialContinuous(inxKeySource));
			propTarget.setSpatialAutoBezierAtKey(inxKeyTarget, propSource.keySpatialAutoBezier(inxKeySource));
			propTarget.setSpatialTangentsAtKey(inxKeyTarget, propSource.keyInSpatialTangent(inxKeySource), propSource.keyOutSpatialTangent(inxKeySource));
		}
	}

	// ROVING
	if (propSource.isSpatial) {
		for (var k = 0; k < numKeyframes; k++) {
			propTarget.setRovingAtKey(inxKeyStartTarget + k, propSource.keyRoving(keyStartSource + k));
		}
	}
}
