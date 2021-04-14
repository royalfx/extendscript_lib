// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description Merge objects
 * Works only with one level objects
 * 
 * @param objMain {Object}
 * @param objNew {Object}
 * @param skipNull {boolean}
 */
function as_objectsMerge(objMain, objNew, skipNull) {
	
	// Check arguments
	if ((objMain == null) || (typeof (objMain) != "object") || (objMain instanceof Array)) {
		throw new Error("Property \"objMain\" is not an Object");
	}
	if ((objNew == null) || (typeof (objNew) != "object") || (objNew instanceof Array)) {
		throw new Error("Property \"objNew\" is not an Object");
	}

	// Clone
	var objMerge = as_objectClone(objMain);

	// Loop
	var valPrev, valNew;
	for (var attr in objNew) {

		// Check self property
		if (objNew.hasOwnProperty(attr)) {
			valPrev = objMerge[attr];
			valNew = objNew[attr];
			// Check null
			if (!skipNull || (valNew !== null)) {
				// Check own property
				if (objMerge.hasOwnProperty(attr)) {
					if (!as_dataIsSameType(valPrev, valNew)) {
						// Set if diff data type
						objMerge[attr] = valNew;
					} else if (valNew instanceof Array) {
						// Set merged arrays
						objMerge[attr] = as_arraysMerge(valPrev, valNew);
					} else {
						// Set new value
						objMerge[attr] = valNew;
					}
				} else {
					// Set if new property
					objMerge[attr] = objNew[attr];
				}
			} else {
				// Skip if null
			}
		} else {
			// Skip not self property
		}
	}
	return objMerge;
}
