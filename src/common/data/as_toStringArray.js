// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Jul 16 2019
 * 
 * @param arr 
 */
function as_toStringArray(arr) {
	if (!(arr instanceof Array)) {
		return new Error("Property \"arr\" is not an Array");
	}
	var vs = [];
	try {
		for (var i = 0, v, s, len = arr.length; i < len; i++) {
			v = arr[i];
			if (typeof(v) === "object") {
				if (v instanceof Array) {
					s = as_toStringArray(v);
				} else if (v === null) {
					s = "null";
				} else {
					s = as_toStringObject(v);
				}
			} else {
				s = as_toString(v);
			}
			vs[vs.length] = s;
		}
	} catch (err) {
		//alert(err.name + " at line " + err.line + " : " + err.message);
		return "[" + err.message + "]";
	}
	if(vs.length > 0) {
		return "[" + vs.join(", ") + "]";
	} else {
		return "[]";
	}
}