// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Get item path
 * @param {*} item
 */
function as_itemGetPath(item) {
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
