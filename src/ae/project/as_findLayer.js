// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 23 2019
 * 
 * @description FIND ITEM
 * @param {CompItem} comp 
 * @param {string} layerName 
 * @param {*} layerType LayerType
 */
function as_findLayer(comp, layerName, layerType) {

    // LOOP LAYERS
    for (var l = 1, layer, len = comp.numLayers; l <= len; l++) {
        layer = comp.layer(l);
		if((layer.name == layerName) && ((filterLayerTypes === undefined) || (as_layerGetType(layer) == layerType))) {
			return layer;
		}
    }

    // Return
    return null;
}
