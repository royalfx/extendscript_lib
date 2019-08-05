#include "/d/Google Drive/Adobe Scripting/extendscript_lib/src/ae/include.jsxinc";

// DO
if(app.project) {
    var list = as_projectSelectionList();
    alert(list.join("\n"));
} else {
    alert("Open the project!");
}

