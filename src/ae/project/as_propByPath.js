// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jan 05 2021
 * 
 * @param {CompItem} comp
 * @param {Array} path [string]
 * @description The first value in the array must be the layer name.
 * @returns {*}
 */
function as_propByPath(comp, path) {
    if (!(comp instanceof CompItem)) {
        return null;
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
        prop = prop(path[i]);
    }

	return prop;
}