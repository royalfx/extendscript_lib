// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jan 06 2021
 * 
 * @description Get prop comp
 * @param {*} prop 
 */
function as_propGetContainingComp(prop) {

	if (!isValid(prop)) {
		return null;
	}
	if (!prop) {
		return null;
	}
	var layer;
	while (prop) {
		if (as_propIsLayer(prop)) {
			layer = prop;
			break;
		}
		prop = prop.parentProperty;
	}
	
	if (layer) {
		return layer.containingComp;
	} else {
		return null;
	}
}
