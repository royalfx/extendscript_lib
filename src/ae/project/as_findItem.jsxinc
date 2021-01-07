// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Dec 09 2019
 * 
 * @param {string} itemName 
 * @param {string} itemType {@link ItemTypeName} (Optional)
 * @param {Folder} folder (Optional)
 * @param {boolean} intoSubfolders (Optional)
 * @returns {Item}
 */
function as_findItem(itemName, itemType, folder, intoSubfolders) {
	
	// Check arguments
	itemType = (itemType || ItemTypeName.COMPOSITION);
	folder = (folder || app.project.rootFolder);

	// Loop items
	for (var item, i = 1, len = folder.numItems; i <= len; i++) {
		item = folder.item(i);
		if ((item.name == itemName) && (as_itemGetType(item) == itemType)) {
			return item;
		}
		if ((item instanceof FolderItem) && intoSubfolders) {
			item = as_findItem(itemName, itemType, item, true);
			if (item !== null) {
				return item;
			}
		}
	}

	return null;
}
