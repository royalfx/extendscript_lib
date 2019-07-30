#include "/d/Google Drive/Adobe Scripting/ae_scripts/lib/include.jsxinc";

// DO
if(app.project) {
    var arrFonts = as_projectFontsList();
    alert(arrFonts.sort().join("\n"));
} else {
    alert("Open the project!");
}

