// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jun 13 2020
 * 
 * @param {*} prop Layer or Property
 * @param {boolean} pseudoEffectMatchName Use matchName for pseudo effect properties (Optional)
 * @returns {Array}
 */
function as_propGetPath(prop, pseudoEffectMatchName) {
	var path = [];

	// Loop parents
	while (prop.parentProperty !== null) {

		// INDEXED_GROUP
		if (prop.parentProperty.propertyType === PropertyType.INDEXED_GROUP) {
			path.unshift(prop.name);
			
		// NAMED_GROUP
		} else if (prop.parentProperty.propertyType === PropertyType.NAMED_GROUP) {

			// Pseudo
			if ((prop.matchName.indexOf("Pseudo/") == 0) && !pseudoEffectMatchName) {
				path.unshift(prop.name);

			} else {
				path.unshift(prop.matchName);
			}

		// PROPERTY
		} else {
			path.unshift(prop.matchName);
		}

		prop = prop.parentProperty;
	}

	path.unshift(prop.name);
	return path;
}