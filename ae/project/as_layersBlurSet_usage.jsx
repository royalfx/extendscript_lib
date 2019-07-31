#include "/d/Google Drive/Adobe Scripting/extendscript_lib/ae/include.jsxinc";

var comp = app.project.activeItem;
if(comp) {
    as_layersBlurSet(comp, true);
} else {
    alert("Select target comp!");
}