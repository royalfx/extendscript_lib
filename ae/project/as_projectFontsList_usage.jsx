#include "/d/Google Drive/Adobe Scripting/extendscript_lib/ae/include.jsxinc";

// DO
if(app.project) {
    var arrFonts = as_projectFontsList();
    alert(arrFonts.sort().join("\n"));
} else {
    alert("Open the project!");
}

