// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

 /**
 * @version 1.0.1
 * @date Jul 23 2019
 * 
 * @description Applies function for each property
 * @param propGroup Property or property group
 * @param func {Function} First argument always is target property!
 * @param args {Array} Arguments for function
 * @param filterMatchNames {Array}
 * @returns Array with results
 */
function as_loopProps(propGroup, func, args, filterMatchNames) {

	// Check arguments
	if(args === undefined) {
    	args = [];
	}
	
	// VARS
	var results = [];

	// LOOP
	if (propGroup.propertyType === PropertyType.PROPERTY) {

		// CHECK MATCHNAMES
		if((filterMatchNames !== undefined) && (filterMatchNames.length > 0) && (as_arrayCheckValue(propGroup.matchName, filterMatchNames) == -1)) {
            return results;
		}
		var result = func.apply(undefined, [propGroup].concat(args));
		if(result !== undefined) {
			results.push(result);
		}
		
	} else /*if ((propGroup.propertyType === PropertyType.INDEXED_GROUP) || (propGroup.propertyType === PropertyType.NAMED_GROUP))*/ {
		for (var p = 1, prop; p <= propGroup.numProperties; p++) {
			prop = propGroup.property(p);
			results = results.concat(as_loopProps(prop, func, args));
		}
	}

	// Return
	return results;
}
