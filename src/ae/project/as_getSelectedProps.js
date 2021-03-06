// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jan 04 2021
 * 
 * @param {CompItem} compOrLayer
 * @requires as_propGetPath
 * @description Returns only selected properties without parent groups
 * @returns {Array}
 */
function as_getSelectedProps(compOrLayer) {

	if (compOrLayer == null) {
		return null;
	}

	var selection = compOrLayer.selectedProperties;
	if (selection.length <= 1) {
		return selection;

	} else {
		var list = [];
		var paths = [];

		for (var i = (selection.length - 1), prop, propPath, skip; i >= 0; i--) {
			prop = selection[i];
			propPath = as_propGetPath(prop).join("/");

			// PROPERTY
			if (prop.propertyType === PropertyType.PROPERTY) {
				list.unshift(prop);
				paths.push(propPath);

			// GROUP
			} else {

				// Check is parent group
				skip = false;
				for (var j = 0; j < paths.length; j++) {
					if (paths[j].indexOf(propPath) == 0) {
						skip = true;
						break;
					}
				}
				if (skip) {
					continue;
				} else {
					list.unshift(prop);
				}
			}
		}
		return list;
	}
}