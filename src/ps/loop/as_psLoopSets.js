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
function as_psLoopSets(layerSet, func, args){

	// Check arguments
	if(args === undefined) {
		args = [];
	}

	// Vars
	var results = [];

	// DO
	if(layerSet.typename == "LayerSet") {
		var result = func.apply(undefined, [layerSet].concat(args));
		if(result !== undefined) {
			results.push(result);
		}
	}
	
	// Subsets
	var len = 0;
	try{
		len = layerSet.layers.length;
	} catch(err) {
		// alert("Can't get length of the layers collection of " + layerSet.name);
	}
	for(var l = 0, lset; l < len; l++) {
		lset = layerSet.layers[l];
		if(lset.typename == "LayerSet") {
			results = results.concat(as_psLoopSets(lset, func, args));
		}
	}

	// Return
	return results;
}