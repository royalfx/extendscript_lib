#include "/d/Google Drive/Adobe Scripting/ae_scripts/lib/include.jsxinc";

var comp = app.project.activeItem;
if(comp) {

    var filterLayerNames = [];
    var filterLayerTypes = [];
    var results = as_loopLayers(comp, getLayerPosition, [], filterLayerNames, filterLayerTypes);
    alert(results.join("\n"));

    function getLayerPosition(layer) {
        return layer("ADBE Transform Group")("ADBE Position").value;
    }

} else {
    alert("Select target property!");
}