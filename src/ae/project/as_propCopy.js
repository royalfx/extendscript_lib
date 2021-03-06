// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Copy property
 * @param {Property} propOriginal 
 * @param {Property} propTarget 
 */
function as_propCopy(propOriginal, propTarget) {
	var err = "";
    /*
    PropertyValueType.NO_VALUE
    PropertyValueType.ThreeD_SPATIAL
    PropertyValueType.ThreeD
    PropertyValueType.TwoD_SPATIAL
    PropertyValueType.TwoD
    PropertyValueType.OneD
    PropertyValueType.COLOR
    PropertyValueType.CUSTOM_VALUE
    PropertyValueType.MARKER
    PropertyValueType.LAYER_INDEX
    PropertyValueType.MASK_INDEX
    PropertyValueType.SHAPE
    PropertyValueType.TEXT_DOCUMENT
    */
	if ((propOriginal.propertyType === PropertyType.PROPERTY) && (propOriginal.propertyValueType !== PropertyValueType.NO_VALUE)) {
		if ((propTarget.propertyType === PropertyType.PROPERTY) && (propTarget.propertyValueType !== PropertyValueType.NO_VALUE)) {
			if (propOriginal.propertyValueType === propTarget.propertyValueType) {
				// CLEAN PROP
				if (propTarget.canSetExpression) {
					propTarget.expression = "";
				}
				while (propTarget.numKeys > 0) {
					propTarget.removeKey(1);
				}
				// COPY KEYS
				if (propOriginal.numKeys > 0) {
					for (var k = 1; k <= propOriginal.numKeys; k++) {
						propTarget.setValueAtTime(propOriginal.keyTime(k), propOriginal.keyValue(k));
						propTarget.setTemporalContinuousAtKey(k, propOriginal.keyTemporalContinuous(k));
						propTarget.setTemporalAutoBezierAtKey(k, propOriginal.keyTemporalAutoBezier(k));
						propTarget.setTemporalEaseAtKey(k, propOriginal.keyInTemporalEase(k), propOriginal.keyOutTemporalEase(k));
						propTarget.setInterpolationTypeAtKey(k, propOriginal.keyInInterpolationType(k), propOriginal.keyOutInterpolationType(k));
						//
						if (propOriginal.isSpatial) {
							if ((propOriginal.propertyValueType == PropertyValueType.TwoD_SPATIAL) || (propOriginal.propertyValueType == PropertyValueType.ThreeD_SPATIAL)) {
								propTarget.setSpatialContinuousAtKey(k, propOriginal.keySpatialContinuous(k));
								propTarget.setSpatialAutoBezierAtKey(k, propOriginal.keySpatialAutoBezier(k));
								propTarget.setSpatialTangentsAtKey(k, propOriginal.keyInSpatialTangent(k), propOriginal.keyOutSpatialTangent(k));
							}
						}
					}
					if (propOriginal.isSpatial) {
						if ((propOriginal.propertyValueType == PropertyValueType.TwoD_SPATIAL) || (propOriginal.propertyValueType == PropertyValueType.ThreeD_SPATIAL)) {
							for (var k = 1; k <= propOriginal.numKeys; k++) {
								propTarget.setRovingAtKey(k, propOriginal.keyRoving(k));
							}
						}
					}
				} else {
					// COPY VALUE
					propTarget.setValue(propOriginal.valueAtTime(0, true));
				}
				// COPY EXPR
				if (propOriginal.expressionEnabled) {
					if (propTarget.canSetExpression) {
						err = propTarget.expression = propOriginal.expression;
					} else {
						err = "Cant't set expression to property \"" + propTarget.name + "\"!";
					}
				}
			} else {
				err = "PropertyValueType's do not match!";
			}
		} else {
			err = "Property \"" + propTarget.name + "\" is not valid property!";
		}
	} else {
		err = "Property \"" + propOriginal.name + "\" is not valid property!";
	}
	return err;
}
