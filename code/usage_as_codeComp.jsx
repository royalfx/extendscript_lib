#include "as_toString.jsxinc";
#include "as_toCodeString.jsxinc";
#include "as_codeLayer.jsxinc";
#include "as_codeComp.jsxinc";
#include "as_codeProperties.jsxinc";
#include "as_toStringArray.jsxinc";

var comp = app.project.activeItem;
if(comp) {

    // GET CODE
    var linesCollector = [], errorsCollector = [];
    as_codeComp(comp, true, linesCollector, errorsCollector);
    var codeString = "app.beginUndoGroup(\"" + "as_codeComp" + "\");\n" + linesCollector.join("\n") + "\n\napp.endUndoGroup();";

    // SHOW TEXT
    var win = new Window("palette", "Test", undefined, { resizeable: true, name: "test" });
    var textField = win.add("edittext", [0, 0, 500, 200], codeString, { multiline:true });
    win.show();
    win.center();

    // SHOW ERRORS
    if(errorsCollector.length > 0) {
        alert(errorsCollector.join("\n"))
    }

} else {
    alert("Select target comp!");
}