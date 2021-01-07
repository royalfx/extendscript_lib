// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 23 2019
 * 
 * @param {CompItem} comp
 * @param {string} fontName
 * @return {number} num updated layers
 */
function as_compSingleFont(comp, fontName) {

    var filterLayerTypes = [LayerType.TEXT];
    var results = as_loopLayers(comp, handleLayer, [fontName], undefined, filterLayerTypes)
    return results.length;

    function handleLayer(layer, fontName) {
        var changed = false;
        var propText = layer("ADBE Text Properties")("ADBE Text Document");
        var textDoc;
        if(propText.numKeys > 0) {
            for (var k = 1; k <= propText.numKeys; k++) {
                textDoc = propText.keyValue(k);
                if(textDoc.font != fontName) {
                    textDoc.font = fontName;
                    propText.setValueAtKey(k, textDoc);
                    changed = true;
                }
            }
        } else {
            textDoc = propText.value;
            if(textDoc.font != fontName) {
                textDoc.font = fontName;
                propText.setValue(textDoc);
                changed = true;
            }
        }
    }

    // Return
    if(changed) {
        return 1;
    }
}