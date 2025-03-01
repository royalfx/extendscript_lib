// Copyright (c) 2024 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.6
 * @date Jan 03 2025
 * @param {Property} prop 
 * @param {string} rootLevel
 * @returns {string}
 */
function as_exprGetPropPath(prop, rootLevel) {
    if (prop === null || !isValid(prop)) {
        return null;
    }
    if (rootLevel !== "layer" && rootLevel !== "comp" && rootLevel !== "project") {
        throw new Error("Invalid rootLevel. Must be 'layer', 'comp', or 'project'");
    }
    
    // Declare vars
    var expr = "";
    var currentProp = prop;  // Create new variable for iteration
    
	// Loop while parentProperty isn't layer
    while (currentProp.parentProperty !== null) {

		// INDEXED_GROUP
        if (currentProp.parentProperty.propertyType === PropertyType.INDEXED_GROUP) {
			expr = "(" + JSON.stringify(currentProp.name) + ")" + expr;

		// EFFECTS GROUP
		// If use matchName, expressions auto fixing when effect renamed in AE doesn't work. Use .effect("Effect Name") instead.
		} else if (currentProp.matchName == "ADBE Effect Parade"){
			expr = ".effect" + expr;

		// NAMED_GROUP or PROPERTY
        } else {
			expr = "(" + JSON.stringify(((currentProp.matchName !== "") ? currentProp.matchName : currentProp.name)) + ")" + expr;
        }
        currentProp = currentProp.parentProperty;
    }
    
	var layer = currentProp;

	// Root is layer
    if (rootLevel == "layer") {
		expr = "thisLayer" + expr;

	// Root is comp
    } else if (rootLevel == "comp") {
		expr = "thisComp.layer(" + JSON.stringify(layer.name) + ")" + expr;

	// Root is project
    } else if (rootLevel == "project") {
		expr = "comp(" + JSON.stringify(as_propGetContainingComp(layer).name) + ").layer(" + JSON.stringify(layer.name) + ")" + expr;

    } else {
        throw new Error("Invalid rootLevel. Must be 'layer', 'comp', or 'project'");
    }
	
	// Short marker ref
	expr = expr.split("(\"ADBE Marker\")").join(".marker");

    return expr;
}
