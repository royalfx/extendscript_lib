// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 23 2019
 * 
 * @description Create comps by items
 * @param {Array} items
 */
function as_itemsToComps(items) {

	var comps = [];

	// DEFAULT PROPS
	var width = 1920, height = 1080, pixelAspect = 1, duration = 1, frameRate = 30;

	// LOOP ITEMS
	for (var i = 0, item, comp; i < items.length; i++) {
		item = items[i];

		// ADD
		if (item instanceof FootageItem) {
			comp = app.project.items.addComp(item.name, item.width, item.height, item.pixelAspect, (item.duration == 0) ? duration : item.duration, frameRate);
		} else {
			comp = app.project.items.addComp(item.name, width, height, pixelAspect, duration, frameRate);
		}
		comp.layers.add(item);
		comps.push(comp);
	}

	// Return
	return comps;
}