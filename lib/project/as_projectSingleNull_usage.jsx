// BATCH
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/batch";
#include "as_loopItemsRecursive.jsxinc";
#include "as_loopLayers.jsxinc";

// PROJECT
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/project";
#include "as_projectSingleNull.jsxinc";
#include "as_itemGetType.jsxinc";

// DATA
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/data";
#include "as_arrayCheckValue.jsxinc";


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