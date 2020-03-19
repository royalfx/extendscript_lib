#include "/d/Dropbox/Adobe Scripting/scripts/extendscript_lib/src/ae/include.jsxinc";

// DO
if(app.project) {
    var arrFonts = as_projectFontsList();
    alert(arrFonts.sort().join("\n"));
} else {
    alert("Open the project!");
}

