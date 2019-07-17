/**
 * @description Replace image item by solid
 * @param item {*}
 * @return {boolean}
 */
function as_imageToSolid(item, color) {

	// CHECK ARGS
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
