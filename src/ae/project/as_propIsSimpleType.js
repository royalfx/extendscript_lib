// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Is prop simple
 * @param {*} prop 
 */
function as_propIsSimpleType(prop) {
	if (prop.propertyType == PropertyType.PROPERTY) {
		if (!prop.elided) {
			if ((prop.matchName != "ADBE Position_0") && (prop.matchName != "ADBE Position_1") && (prop.matchName != "ADBE Position_2")) {
				var validTypes = [];
				validTypes.push(PropertyValueType.ThreeD);
				validTypes.push(PropertyValueType.ThreeD_SPATIAL);
				validTypes.push(PropertyValueType.TwoD);
				validTypes.push(PropertyValueType.TwoD_SPATIAL);
				validTypes.push(PropertyValueType.OneD);
				validTypes.push(PropertyValueType.COLOR);
				// validTypes.push(validTypes.push(PropertyValueType.NO_VALUE);
				// validTypes.push(PropertyValueType.CUSTOM_VALUE);
				// validTypes.push(PropertyValueType.MARKER);
				// Can't set expression!
				// validTypes.push(PropertyValueType.LAYER_INDEX);
				// validTypes.push(PropertyValueType.MASK_INDEX);
				// validTypes.push(PropertyValueType.SHAPE);
				validTypes.push(PropertyValueType.TEXT_DOCUMENT);
				var valueType = prop.propertyValueType;
				for (var i = 0; i < validTypes.length; i++) {
					if (valueType == validTypes[i]) {
						return true;
					}
				}
			}
		}
	}
	return false;
}
