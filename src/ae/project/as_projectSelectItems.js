// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Select project items
 * @param {Array} items 
 */
function as_projectSelectItems(items) {
	while (app.project.selection.length > 0) {
		app.project.selection[0].selected = false;
	}
	for (var i = 0; i < items.length; i++) {
		items[i].selected = true;
	}
}
