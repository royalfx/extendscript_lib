// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Get ui elements state
 * @param {Window} windowObj 
 * @param {Array} listElements
 * @returns {Object}
 */
function as_uiPrefsGet(windowObj, listElements) {

	// VARS
	var dataPrefs = {};

	function recursiveLoopElements(element) {
		// CHECK ELEMENT
		if (element.properties && (as_arrayCheckValue(element.properties.name, listElements) >= 0)) {

			// DATA
			var dataElement = dataPrefs[element.properties.name] = {};

			// ITEMS
			if(element.items !== undefined) {
				dataElement.items = [];
				for (var i = 0, item; i < element.items.length; i++) {
					dataElement.items.push(element.items[i].text)
				}
				// SELECTION
				dataElement.selection = element.selection ? element.selection.index : null;
			}

			// VALUE
			if (element.value !== undefined) {
				dataElement.value = element.value;
			}

			// TEXT
			if (element.text !== undefined) {
				dataElement.text = element.text;
			}
			
		}
		
		// LOOP CHILDREN
		if (element.children && (element.children.length > 0)) {
			for (var e = 0, elementChild; e < element.children.length; e++) {
				elementChild = element.children[e];
				recursiveLoopElements(elementChild);
			}
		}
	}
	recursiveLoopElements(windowObj);

	// Return
	return dataPrefs;
}
