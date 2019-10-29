// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.3
// date: Mon Feb 05 2018

/**
 * 
 * @description Merge objects
 * Works only with one level objects
 * 
 * @param objMain {object}
 * @param objNew {object}
 * @param skipNull {boolean}
 */
function as_objectsMerge(objMain, objNew, skipNull) {
	
	// CHECLK ARGS
	if ((objMain == null) || (typeof (objMain) != "object") || (objMain instanceof Array)) {
		throw new Error("Property \"objMain\" is not an Object");
	}
	if ((objNew == null) || (typeof (objNew) != "object") || (objNew instanceof Array)) {
		throw new Error("Property \"objNew\" is not an Object");
	}

	// CLONE
	var objMerge = as_objectClone(objMain);

	// LOOP
	var valPrev, valNew;
	for (var attr in objNew) {

		// CHECK SELF PROPERTY
		if (objNew.hasOwnProperty(attr)) {
			valPrev = objMerge[attr];
			valNew = objNew[attr];
			// CHECK NULL
			if (!skipNull || (valNew !== null)) {
				// CHECK OWN PROPERTY
				if (objMerge.hasOwnProperty(attr)) {
					if (!as_dataIsSameType(valPrev, valNew)) {
						// SET IF DIFF DATA TYPE
						objMerge[attr] = valNew;
					}
					else if (valNew instanceof Array) {
						// SET MERGED ARRAYS
						objMerge[attr] = as_arraysMerge(valPrev, valNew);
					}
					else {
						// SET NEW VALUE
						objMerge[attr] = valNew;
					}
				}
				else {
					// SET IF NEW PROPERTY
					objMerge[attr] = objNew[attr];
				}
			}
			else {
				// SKIP IF NULL
			}
		}
		else {
			// SKIP NOT SELF PROPERTY
		}
	}
	return objMerge;
}