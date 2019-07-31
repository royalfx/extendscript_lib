#include "/d/Google Drive/Adobe Scripting/extendscript_lib/ae/include.jsxinc";

var comp = app.project.activeItem;
if(comp) {
    if(comp.selectedLayers.length > 0) {

        var layer = comp.selectedLayers[0];
        var count = 0;

        // UNDO
        app.beginUndoGroup("as_effectNameUniversalized");

        // DO
        for (var e = 1, effect; e <= layer("ADBE Effect Parade").numProperties; e++) {
            effect = layer("ADBE Effect Parade").property(e);
            if(as_effectNameUniversalized(effect)) {
                count++;
            }
        }

        // UNDO END
        app.endUndoGroup();

        alert(count + " effects renamed!");

    } else {
        alert("Select target layer!");
    }
} else {
    alert("Select target layer!");
}