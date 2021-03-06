// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Jul 16 2019
 * 
 * @param {prop} prop Target property
 * @returns {boolean}
 */
function as_propIsEffect(prop) {
	if(!isValid(prop) || !prop) {
		return false;
	}
	return (prop.parentProperty && (prop.parentProperty.matchName == "ADBE Effect Parade"));
}