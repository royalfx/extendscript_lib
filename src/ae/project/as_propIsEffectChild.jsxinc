// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Is effect prop
 * @param {*} prop 
 */
function as_propIsEffectChild(prop) {
	if (!isValid(prop) || !prop) {
		return false;
	}
	if (as_propIsEffect(prop)) {
		return true;
	}
	while (prop.parentProperty) {
		if (prop.parentProperty.matchName == "ADBE Effect Parade") {
			return prop;
		}
		prop = prop.parentProperty;
	}
	return false;
}
