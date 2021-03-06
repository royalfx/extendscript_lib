// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description
 * @param obj {Object}
 */
function as_objectClone(obj) {
	
	var copy;

	// HANDLE THE 3 SIMPLE TYPES, AND NULL OR UNDEFINED
	if (null == obj || ("object" != typeof (obj))) {
		return obj;
	}

	// DATE
	if (obj instanceof Date) {
		copy = new Date();
		copy.setTime(obj.getTime());
		return copy;
	}

	// ARRAY
	if (obj instanceof Array) {
		copy = [];
		for (var i = 0, len = obj.length; i < len; i++) {
			copy[i] = as_objectClone(obj[i]);
		}
		return copy;
	}
	
	// OBJECT
	if (obj instanceof Object) {
		copy = {};
		for (var attr in obj) {
			if (obj.hasOwnProperty(attr)) {
				copy[attr] = as_objectClone(obj[attr]);
			}
		}
		return copy;
	}
	
	throw new Error("Unable to clone object! Object type not supported.");
}
