// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Jan 03 2025
 * 
 * @description Get prop comp
 * @param {*} prop 
 */
function as_propGetContainingComp(prop) {

	// Early validation
    if (!prop || !isValid(prop)) {
        return null;
    }

	// Navigate up to find the layer
	var currentProp = prop;
	while (currentProp.parentProperty) {
		currentProp = currentProp.parentProperty;
	}

	// At this point, currentProp should be a layer
	return currentProp.containingComp || null;
}
