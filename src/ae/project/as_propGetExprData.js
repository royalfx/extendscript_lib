// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Dec 14 2019
 * 
 * @param {Property} prop
 * @returns {*}
 */
function as_propGetExprData(prop) {
	if (prop == null) {
		return null;
	} else if (prop.expression.indexOf("value;/" + "/") == -1) {
		return null;
	} else {
		try {
			var str = prop.expression.split("value;/" + "/")[1];
			if (str == "") {
				return null;
			}
			return eval(str);
		} catch (error) {
			return null;
		}
	}
}