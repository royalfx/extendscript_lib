// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Jul 16 2019
 * 
 * @param obj 
 */
function as_toStringObject(obj) {
	
	if ((typeof(obj) !== "object") || (obj instanceof Array)) {
		return new Error("Property \"obj\" is not an Object");
	}
	
	// Check object type
	var n = obj.reflect.name;
	if (n != "Object") {
		if(obj.name) {
			return "{" + n + ": " + obj.name + "}";
		} else {
			return "{Object " + n + "}"
		}
	}

	// Loop props
	var vs = [], v, s;
	try {
		for (var p in obj) {
			if(obj.hasOwnProperty(p)) {
				v = obj[p];
				s = "\"" + p + "\"" + ": ";
				if (typeof(v) === "object") {
					if (v instanceof Array) {
						s += as_toStringArray(v);
					} else if (v === null) {
						s += "null";
					} else {
						s += as_toStringObject(v);
					}
				} else {
					s += as_toString(v);
				}
				vs[vs.length] = s;
			}
		}
	} catch (err) {
		//alert(err.name + " at line " + err.line + " : " + err.message);
		return "{" + err.message + "}";
	}
	if(vs.length > 0) {
		return "{" + vs.join(", ") + "}";
	} else {
		return "{}";
	}
}