function loopSelectedItems() {

	if(app.project.selection.length == 0) {
		alert("No selected comps!");
		return null;
	}

	// UNDO START
	app.beginUndoGroup("loopSelectedItems.jsx");

	for (var i = 0, item; i < app.project.selection.length; i++) {
		item = app.project.selection[i];
		// DO
	}

	// UNDO END
	app.endUndoGroup();
}

loopSelectedItems();