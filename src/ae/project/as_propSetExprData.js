// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jun 10 2020
 * 
 * @param {Property} prop
 * @param {*} value
 * @returns {*}
 */
function as_propSetExprData(prop, value) {
	if ((prop == null) || (value === undefined)) {
		return false;
	} else {
		prop.expression = "value;/" + "/" + JSON.stringify(value);
		return true;
	}
}