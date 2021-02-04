// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Feb 04 2021
 * 
 * @description Get property layer
 * @param {*} prop 
 */
function as_propGetContainingLayer(prop) {
	if (!isValid(prop)) {
		return null;
	}
	if (!prop) {
		return null;
	}
	var layer;
	var propOriginal = prop;
	while (prop) {
		if (as_propIsLayer(prop)) {
			layer = prop;
			break;
		}

		// It looks like in recent versions of AE the removed property is still valid.
		// But the parent property is not valid.
		if (isValid(prop.parentProperty)) {
			prop = prop.parentProperty;
		} else {
			return null;
		}
	}

	// markerProperty - parent is comp
	if (layer && (propOriginal.matchName == "ADBE Marker") && (layer.containingComp.markerProperty == propOriginal)) {
		return null;
	}

	return layer;
}
