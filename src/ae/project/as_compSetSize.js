// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description SET COMP SIZE
 * @param {CompItem} comp 
 * @param {number} width 
 * @param {number} height 
 */
function as_compSetSize(comp, width, height) {

	// Check arguments
	if (isNaN(width)) {
		alert("Invalid width!");
		return false;
	}
	if (isNaN(height)) {
		alert("Invalid height!");
		return false;
	}

	// DO
	if ((comp.width != width) || (comp.height != height)) {
		// VARS
		// var widthOld = comp.width;
		// var heightOld = comp.height;
		var widthDiff = width - comp.width;
		var heightDiff = height - comp.height;

		// RESIZE
		comp.width = width;
		comp.height = height;

		// LOOP LAYERS
		for (var l = 1, layer, len = comp.numLayers; l <= len; l++) {
			layer = comp.layer(l);

			// LAYER POSITION
			if (!layer.parent) {
				moveLayerProp(layer("ADBE Transform Group")("ADBE Position"), [widthDiff, heightDiff], comp.time);
				if (layer instanceof CameraLayer) {
					moveLayerProp(layer("ADBE Transform Group")("ADBE Anchor Point"), [widthDiff, heightDiff], comp.time);
				}
			}
		}
	}

	function moveLayerProp(prop, diff, compTime) {
		try {
			if (prop.numKeys > 0) {
				for (var k = 1, t, p; k <= prop.numKeys; k++) {
					t = prop.keyTime(k);
					p = prop.valueAtTime(t, true) + diff * 0.5;
					prop.setValueAtTime(t, p);
				}
			} else {
				prop.setValue(prop.valueAtTime(compTime, true) + diff * 0.5);
			}
		} catch (err) {
			if (err.message.indexOf("hidden") == -1) {
				// errorsCollector.push(err.message);
			}
		}
	}

	// Return
	return true;
}
