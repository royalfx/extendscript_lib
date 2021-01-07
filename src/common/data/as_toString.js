// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Jul 16 2019
 * 
 * @param obj 
 */
function as_toString(obj) {
	// if(!isValid(obj)){
	// 	return "{ Invalid Object! }"
	// }
	try {
		
		if (typeof(obj) == "string") {
			return "\"" + obj + "\"";
		} else if (typeof(obj) === "undefined") {
			return "undefined";
		} else if (typeof(obj) === "number") {
			return obj.toString();
		} else if (typeof(obj) === "boolean") {
			return obj.toString();
		} else if (typeof(obj) === "function") {
			return "{ Function }";
			// return obj.toString();
		} else { // "object"
			if (obj === null) {
				return "null";
			} else if (obj instanceof Array) {
				return as_toStringArray(obj);
			} else {
				return as_toStringObject(obj);
			}
		}

	} catch(err) {
		return err.message;
	}
}