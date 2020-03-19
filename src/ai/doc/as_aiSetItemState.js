/**
 * @public
 * @param {*} targetItem
 * @param {boolean} targetVisible
 * @param {boolean} targetLocked
 * @param {boolean} targetSelected
 */
function as_aiSetItemState(targetItem, targetVisible, targetLocked, targetSelected) {

	var parents = [];
	var parentsLocked = [];
	var parentsVisible = [];

	/**
	 * Collect parents.
	 * If targetVisible == true all parents will be shown.
	 */
	var parentItem = targetItem.parent;
	while (parentItem && (parentItem.typename != "Document")) {
		parents.push(parentItem);
		parentsLocked.push(parentItem.locked);
		parentsVisible.push((targetVisible === true) || getVisible(parentItem));
		parentItem = parentItem.parent;
	}

	// Unlock parents
	for (var i = parents.length - 1; i >= 0; i--) {
		item = parents[i];
		item.locked = false;
		setVisible(item, true);
	}

	// Set item state
	var itemLocked = targetItem.locked;
	targetItem.locked = false;
	if (targetVisible !== undefined) {
		setVisible(targetItem, targetVisible);
	}
	if (getVisible(targetItem) && (targetSelected !== undefined)) {
		// Looks like if set selected item auto sets visible
		targetItem.selected = targetSelected;
	}
	if (targetLocked !== undefined) {
		targetItem.locked = targetLocked;
	}
	targetItem.locked = itemLocked;

	// Lock parents back
	for (var i = 0, item; i < parents.length; i++) {
		item = parents[i];
		item.locked = parentsLocked[i];
		setVisible(item, parentsVisible[i]);
	}

	/**
	 * @param {*} item
	 * @param {boolean} targetVisible 
	 */
	function setVisible(item, targetVisible) {
		if (item.typename == "Layer") {
			item.visible = targetVisible;
		} else {
			item.hidden = !targetVisible;
		}
	}

	/**
	 * @param {*} item
	 * @returns {boolean} 
	 */
	function getVisible(item) {
		if (item.typename == "Layer") {
			return item.visible === true;
		} else {
			return item.hidden !== true;
		}
	}
}
