// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Dec 09 2019
 *
 * @description Get unique item name
 * @param {*} item 
 * @param {string} itemName 
 * @param {FolderItem} folder 
 * @param {number} startIndex Optional
 * @param {number} suffixLen Optional
 * @param {string} itemType {@link ItemTypeName} Optional
 * @param {boolean} intoSubfolders Optional
 * @param {string} separator Optional
 * @returns {string}
 */
function as_itemGetUniqueName(item, itemName, folder, startIndex, suffixLen, itemType, intoSubfolders, separator) {

	// Check arguments
	startIndex = startIndex || 1;
	suffixLen = suffixLen || 2;
	itemType = (itemType || ItemTypeName.COMPOSITION);
	separator = separator || " ";

	// Declare vars
	var i = startIndex,
		exist = true,
		newName,
		foundItem;

	// Loop items
	while (exist) {
		if (!newName) {
			// First check origin name
			newName = itemName;
		} else {
			// Get new name
			suffixLen = Math.max(suffixLen, i.toString().length);
			newName = (itemName + separator + ("00000000" + i).slice(-suffixLen));
			i++;
		}
		// Check
		foundItem = as_findItem(newName, itemType, folder, intoSubfolders);
		exist = (foundItem != null) && ((item == undefined) || (foundItem != item));
	}
	return newName;
}
