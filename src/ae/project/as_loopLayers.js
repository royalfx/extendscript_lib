// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 23 2019
 * 
 * @param {CompItem} comp 
 * @param {Array} filterLayerNames 
 * @param {Array} filterLayerTypes LayerType
 */
function as_loopLayers(comp, func, args, filterLayerNames, filterLayerTypes) {

    // Check arguments
    if(args === undefined) {
        args = [];
    }

    // VARS
    var results = [];

    // LOOP LAYERS
    for (var l = 1, layer; l <= comp.numLayers; l++) {
        layer = comp.layer(l);

        // CHECK
        var nameMatch = (filterLayerNames === undefined) || (filterLayerNames.length == 0) || (as_arrayCheckValue(layer.name, filterLayerNames) >= 0);
        var typeMatch = (filterLayerTypes === undefined) || (filterLayerTypes.length == 0) || (as_arrayCheckValue(as_layerGetType(layer), filterLayerTypes) >= 0);
        
        // DO
        if(nameMatch && typeMatch) {
            var result = func.apply(undefined, [layer].concat(args));
            if(result !== undefined) {
                results.push(result);
            }
        }
    }

    // Return
    return results;
}