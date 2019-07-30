#include "/d/Google Drive/Adobe Scripting/ae_scripts/lib/include.jsxinc";

// DO
if(app.project) {
    var list = as_projectSelectionList();
    alert(list.join("\n"));
} else {
    alert("Open the project!");
}

