// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description SET COMP DURATION
 * @param {CompItem} comp 
 * @param {number} duration 
 */
function as_compSetDuration(comp, duration) {

	// VARS
	var isExtend = duration > comp.duration;
	var layersLocked = [];
	var timeLastFrame = comp.duration - comp.frameDuration;

	// SET
	comp.duration = duration;

	// COLLECT LOCKED LAYERS
	for (var i = 1, layer; i <= comp.numLayers; i++) {
		layer = comp.layer(i);
		if (layer.locked) {
			layer.locked = false;
			layersLocked.push(layer);
		}
	}
	if (isExtend) {
		for (var i = 1, layer; i <= comp.numLayers; i++) {
			layer = comp.layer(i);
			// EXTEND PRECOMPS
			if (layer.source instanceof CompItem) {
				var durationMin = duration - layer.startTime;
				if (layer.source.duration < durationMin) {
					as_compSetDuration(layer.source, durationMin);
				}
			}
			// EXTEND LAYER
			if (layer.outPoint >= timeLastFrame) {
				layer.outPoint = duration;
			}
		}
	}

	// BACK LOCKED
	for (var i = 0; i < layersLocked.length; i++) {
		layersLocked[i].locked = true;
	}
}
