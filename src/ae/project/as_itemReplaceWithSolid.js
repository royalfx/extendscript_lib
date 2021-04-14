// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 23 2019
 * 
 * @description Replace footage item with solid
 * @param {FootageItem} item
 * @param {Array} color 
 * @return {boolean}
 */
function as_itemReplaceWithSolid(item, color) {

	// Check arguments
	if(color === undefined) {
		color = [53 / 255, 59 / 255, 70 / 255];
	}

	// DO
	if ((item instanceof FootageItem) /* && (item.mainSource instanceof FootageSource)*/) {
		var n = item.name;
		item.replaceWithSolid(color, "temp", item.width, item.height, item.pixelAspect);
		item.name = n;
		return true;
	}
	return false;
}
