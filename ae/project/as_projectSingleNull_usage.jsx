#include "/d/Google Drive/Adobe Scripting/ae_scripts/lib/include.jsxinc";

// UNDO
app.beginUndoGroup("as_projectSingleNull");

// DO
if(app.project) {
    as_projectSingleNull();
} else {
    alert("Open the project!");
}

// UNDO END
app.endUndoGroup();