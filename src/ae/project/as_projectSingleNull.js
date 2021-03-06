// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Dec 13 2019
 * 
 * @description Single null item in project
 */
function as_projectSingleNull() {

    // Get null master
    var nullMaster = as_findItem("Null", ItemTypeName.FOOTAGE, app.project.rootFolder, true);
    if(!nullMaster) {
        var compTemp = app.project.items.addComp("temp", 100, 100, 1, 1, 30);
		var layerNull = compTemp.layers.addNull();
        nullMaster = layerNull.source;
        nullMaster.name = "Null";
        compTemp.remove();
    }

    // Do
    as_loopItems(app.project.rootFolder, true, handleComp, [nullMaster], undefined, [ItemTypeName.COMPOSITION]);

    // Func for handle comps
    function handleComp(comp, nullMaster) {
        as_loopLayers(comp, handleLayer, [nullMaster], undefined, [LayerType.SOLID]);
    }

    // Func for handle layers
    function handleLayer(layer, nullMaster) {
        if (layer.nullLayer && (layer.source != nullMaster)) {
            var sourceOld = layer.source;
            layer.replaceSource(nullMaster, false);

            // Remove
            if(sourceOld.usedIn == 0) {
                sourceOld.remove();
            }
        }
    }
}