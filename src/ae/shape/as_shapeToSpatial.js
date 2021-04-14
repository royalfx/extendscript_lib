// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 17 2019
 * 
 * @param comp {CompItem}
 * @param propSource {Property}
 * @param propTarget {Property}
 */
function as_shapeToSpatial(comp, propSource, propTarget) {

	// Check arguments
	if ((propSource.matchName !== "ADBE Vector Shape") && (propSource.matchName !== "ADBE Mask Shape")) {
		throw new Error("Property type mismatch! propSource.matchName: " + propSource.matchName);
	}
	if ((propTarget.propertyValueType !== PropertyValueType.TwoD_SPATIAL) && (propTarget.propertyValueType !== PropertyValueType.ThreeD_SPATIAL)) {
		throw new Error("Property type mismatch! propTarget.propertyValueType: " + propTarget.propertyValueType);
	}

	// Open comp
	comp.openInViewer();

	// Select temp path layer
	as_compDeselectAll(comp);
	propSource.selected = true;

	// Execute copy
	app.executeCommand(19);

	// Select temp position prop
	as_compDeselectAll(comp);
	propTarget.selected = true;

	// Execute paste
	app.executeCommand(20);

	// Return
	if (propTarget.numKeys == 0) {
		alert("as_shapeToSpatial: " + "Something went wrong! > propTarget.numKeys = 0");
		return false;
	} else {
		return true;
	}
}
