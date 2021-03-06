// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 23 2019
 * 
 * @description Save items as projects
 * @param {Array} items
 * @param {Folder} dirTarget
 */
function as_itemsToProjects(items, dirTarget) {

	if(app.project && app.project.file) {
		if(items.length > 0) {

			// Check arguments
			if(!dirTarget) {
				dirTarget = Folder(app.project.file.path);
			}

			// VARS
			var fileMain = File(app.project.file.fsName);
			
			// COLLECT IDS
			var ids = [];
			for (var i = 0; i < items.length; i++) {
				ids.push(items[i].id);
			}

			// SAVE FILE
			app.project.save();

			// LOOP IDS
			for (var i = 0, item; i < ids.length; i++) {
				item = app.project.itemByID(ids[i]);

				// REDUCE
				app.project.reduceProject([item]);

				// SAVE NEW FILE
				var fileNew = File(dirTarget.fsName + "/" + item.name + ".aep");
				app.project.save(fileNew);

				// CLOSE
				app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);

				// OPEN MAIN FILE
				app.open(fileMain);
			}
		} else {
			alert("Open the project!")
		}
	} else {
		alert("Open the project!");
	}
	
}

// as_itemsToProjects(app.project.selection);
// alert("Done!");