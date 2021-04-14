// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Select project item
 * @param {*} item 
 */
function as_projectSelectItem(item) {
	while (app.project.selection.length > 0) {
		app.project.selection[0].selected = false;
	}
	item.selected = true;
}
