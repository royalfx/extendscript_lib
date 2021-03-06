// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description DESELECT ALL IN COMP
 * @param {CompItem} comp
 */
function as_compDeselectAll(comp) {
	for (var i = 1; i <= comp.numLayers; i++) {
		comp.layer(i).selected = false;
	}
	var props = comp.selectedProperties;
	for (var i = 0; i < props.length; i++) {
		props[i].selected = false;
	}
}
