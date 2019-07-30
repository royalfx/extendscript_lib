#include "/d/Google Drive/Adobe Scripting/ae_scripts/lib/include.jsxinc";

var comp = app.project.activeItem;
if(comp) {
    as_layersBlurSet(comp, true);
} else {
    alert("Select target comp!");
}