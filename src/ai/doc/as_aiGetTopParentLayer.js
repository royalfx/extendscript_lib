/**
 * @public
 * @param {*} item
 */
function as_aiGetTopParentLayer(item) {
	while (item.parent && (item.parent.typename == "Layer")) {
		item = item.parent;
	}
	return item;
}
