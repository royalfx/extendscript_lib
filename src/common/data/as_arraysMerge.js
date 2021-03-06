// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @param arrMain {Array}
 * @param arrNew {Array}
 */
function as_arraysMerge(arrMain, arrNew) {
	
	// Check arguments
	if (!(arrMain instanceof Array)) {
		throw new Error("Property \"arrMain\" is not an Array");
	}
	if (!(arrNew instanceof Array)) {
		return arrMain;
	}

	// Clone
	var margedArr = as_objectClone(arrMain);
	for (var v = 0, val1, val2, vlen = arrNew.length; v < vlen; v++) {
		val1 = margedArr[v];
		val2 = arrNew[v];
		if (val2 !== undefined) {
			// SAME TYPE
			if (typeof (val2) == typeof (val1)) {
				// OBEJCTS
				if (typeof (val2) == "object") {
					if (val1 instanceof Array) {
						//ARRAYS
						if ((val2 instanceof Array)) {
							margedArr[v] = as_arraysMerge(val1, val2);
						}
						else {
							margedArr[v] = val2;
						}
					}
					else if (val1 === null) {
						// NULL
						margedArr[v] = val2;
					}
					else {
						// OBJECTS
						margedArr[v] = as_objectsMerge(val1, val2);
					}
				}
				else {
					margedArr[v] = val2;
				}
			}
			else {
				margedArr[v] = val2;
			}
		}
	}
	return margedArr;
}
