#include as_loopLayers.jsxinc;
#include ../app/as_layerGetType.jsxinc;
#include ../consts/LayerType.jsxinc;

var comp = app.project.activeItem;
if(comp) {

    function getLayerPosition(layer) {
        return layer("ADBE Transform Group")("ADBE Position").value;
    }

    var filterLayerNames = [];
    var filterLayerTypes = [];
    var results = as_loopLayers(comp, getLayerPosition);
    alert(results.join("\n"));

} else {
    alert("Select target property!");
}