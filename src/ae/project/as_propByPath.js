// Copyright (c) 2025 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Jan 03 2025
 * @param {CompItem} comp
 * @param {Array} path [string]
 * @description The first value in the array must be the layer name.
 * @returns {Property}
 */
function as_propByPath(comp, path) {
    if (!(comp instanceof CompItem)) {
        throw new Error("CompItem is expected");
	}
	if (!(path instanceof Array)) {
        throw "An array is expected."
    }
    if (path.length == 0) {
        return null;
    }
    // Get layer
    var prop = comp.layer(path[0]);
    // Loop parents
	for (var i = 1, len = path.length; i < len; i++) {
        if(!prop) {
            return null;
        }
        prop = prop.property(path[i]);
    }

	return prop;
}