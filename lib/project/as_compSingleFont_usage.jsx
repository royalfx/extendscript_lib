#include "/d/Google Drive/Adobe Scripting/ae_scripts/lib/include.jsxinc";

var comp = app.project.activeItem;
if(comp) {
    as_compSingleFont(comp, "Kanit-Bold");
} else {
    alert("Select target comp!");
}