// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 29 2019
 * 
 * @param {*} layerSet
 * @param {Function} func
 * @param {Array} args 
 */
function as_psLoopLayers(layerSet, func, args){

    // Check arguments
	if(args === undefined) {
		args = [];
	}

	// Vars
	var results = [];

	// Do
	var result = func.apply(undefined, [layerSet].concat(args));
	if(result !== undefined) {
		results.push(result);
	}
	
	// Sets
	if((layerSet.typename == "LayerSet") || (layerSet.typename == "Document")) {
        for(var l = 0, layer; l < layerSet.layers.length; l++) {
            layer = layerSet.layers[l];
            as_psLoopLayers(layer, func, args);
        }
    }
    
	// Return
	return results;
}