// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Set layer state
 * @param {*} layer 
 * @param {boolean} enabled 
 * @param {boolean} shy 
 * @param {boolean} guideLayer 
 * @param {boolean} locked 
 * @param {number} label 
 */
function as_layerSetState(layer, enabled, shy, guideLayer, locked, label) {
	locked = (locked !== undefined) ? locked : layer.locked;
	layer.locked = false;
	if (enabled !== undefined) {
		layer.enabled = enabled;
	}
	if (shy !== undefined) {
		layer.shy = shy;
	}
	if (guideLayer !== undefined) {
		layer.guideLayer = guideLayer;
	}
	if (label !== undefined) {
		layer.label = label;
	}
	layer.locked = locked;
}
