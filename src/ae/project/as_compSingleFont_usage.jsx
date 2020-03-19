#include "/d/Dropbox/Adobe Scripting/scripts/extendscript_lib/src/ae/include.jsxinc";

var comp = app.project.activeItem;
if(comp) {
    as_compSingleFont(comp, "Kanit-Bold");
} else {
    alert("Select target comp!");
}