// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 23 2019
 * 
 * @description Find all used fonts in project
 * @param
 */
function as_projectFontsList() {

    // VARS
    var arrFonts = [];

    // DO
    as_loopItems(app.project.rootFolder, true, handleComp, [arrFonts], undefined, [ItemTypeName.COMPOSITION]);

    // FUNC FOR HANDLE COMPS
    function handleComp(comp, arrFonts) {
        return as_loopLayers(comp, handleLayer, [arrFonts], undefined, [LayerType.TEXT]);
    }

    // FUNC FOR HANDLE LAYERS
    function handleLayer(layer, arrFonts) {
        var propText = layer("ADBE Text Properties")("ADBE Text Document");
        if(propText.numKeys > 0) {
            for (var k = 1; k <= propText.numKeys; k++) {
                arrFonts.push(propText.keyValue(k).font);
            }
        } else {
            arrFonts.push(propText.value.font);
        }
        return arrFonts;
    }

    return as_arrayMakeUnique(arrFonts);
}