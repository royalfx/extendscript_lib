// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Select comp layer
 * @param {*} layer 
 */
function as_compSelectLayer(layer) {
	var comp = layer.containingComp;
	as_compDeselectAll(comp);
	layer.selected = true;
}