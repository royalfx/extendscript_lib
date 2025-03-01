// Copyright (c) 2025 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Feb 13 2024
 * 
 * @description Get item path
 * @param {*} item
 */
function as_itemGetPath(item) {
	if(item == app.project.rootFolder) {
		return "";
	}
	var folder = item.parentFolder;
	var itemPath = "";
	while (folder != app.project.rootFolder) {
		if (itemPath == "") {
			itemPath = folder.name;
		} else {
			itemPath = folder.name + "/" + itemPath;
		}
		folder = folder.parentFolder;
	}
	return itemPath;
}
