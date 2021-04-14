// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jan 20 2020
 * 
 * @param {Object} elementContainer
 * @param {string} elementName
 */
function as_uiFindElement(elementContainer, elementName) {
	var children = elementContainer.children;

	for (var i = 0, child, child2; i < children.length; i++) {
		child = children[i];

		if (child.properties && (child.properties.name == elementName)) {
			return child;

		} else if (child.children) {
			child2 = as_uiFindElement(child, elementName);
			if (child2) {
				return child2;
			}
		}
	}
	
	return null;
}
