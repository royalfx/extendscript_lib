// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.4
 * @date Feb 04 2021
 * @param {Property} prop 
 * @param {string} rootLevel
 * @returns {string}
 */
function as_exprGetPropPath(prop, rootLevel) {
    if (prop === null) {
        return null;
	}
	if (!isValid(prop)) {
		return null;
	}
    
    // Declare vars
    var expr = "";
    
	// Loop while parentProperty isn't layer
    while (prop.parentProperty !== null) {

		// INDEXED_GROUP
        if (prop.parentProperty.propertyType === PropertyType.INDEXED_GROUP) {
			expr = "(" + JSON.stringify(prop.name) + ")" + expr;

		// EFFECTS GROUP
		// If use matchName, expressions auto fixing when effect renamed in AE doesn't work. Use .effect("Effect Name") instead.
		} else if (prop.matchName == "ADBE Effect Parade"){
			expr = ".effect" + expr;

		// NAMED_GROUP or PROPERTY
        } else {
			expr = "(" + JSON.stringify(((prop.matchName !== "") ? prop.matchName : prop.name)) + ")" + expr;
        }
        prop = prop.parentProperty;
    }
    
	var layer = prop;

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
        // err
	}
	
	// Short marker ref
	expr = expr.split("(\"ADBE Marker\")").join(".marker");

    return expr;
}
