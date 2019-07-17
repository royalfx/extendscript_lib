/**
 * 
 * @description GET UNIQUE ITEM NAME
 * @param {*} item 
 * @param {string} itemName 
 * @param {FolderItem} locationObject 
 * @param {number} startIndex 
 * @param {number} suffixLen 
 * @param {*} itemType CompItem / FolderItem / FootageItem
 * @param {boolean} searchInSubfolders 
 * @param {string} separator 
 */
function as_getUniqItemName(item, itemName, locationObject, startIndex, suffixLen, itemType, searchInSubfolders, separator) {

	// CHECK ARGS
	startIndex = startIndex || 1;
	suffixLen = suffixLen || 2;
	itemType = itemType || CompItem;
	separator = separator || " ";

	// VARS
	var i = startIndex, exist = true, newName, foundItem;

	// LOOP
	while (exist) {
		if (!newName) {
			// FIRST CHECK ORIGIN NAME
			newName = itemName;
		} else {
			// GET NEW NAME
			suffixLen = Math.max(suffixLen, i.toString().length);
			newName = (itemName + separator + ("00000000" + i).slice(-suffixLen));
			i++;
		}
		// CHECK
		foundItem = as_itemGet(newName, itemType, locationObject, searchInSubfolders);
		exist = (foundItem != null) && ((item == undefined) || (foundItem != item));
	}
	return newName;
}
