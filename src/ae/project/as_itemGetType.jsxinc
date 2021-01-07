// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Dec 12 2019
 * 
 * @param {Item} item
 * @return {string} {@link ItemTypeName}
 */
function as_itemGetType(item) {
	if (item instanceof CompItem) {
		return ItemTypeName.COMPOSITION;
	}
	if (item instanceof FootageItem) {
		return ItemTypeName.FOOTAGE;
	}
	if (item instanceof FolderItem) {
		return ItemTypeName.FOLDER;
	}
	return null;
}