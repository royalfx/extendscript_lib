// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
  * @version 1.0.3
  * @date Mon Feb 05 2018
  * 
  * @description Check is same data type
  * @param {any} value1 
  * @param {any} value2 
  */
function as_dataIsSameType(value1, value2) {
	if (typeof(value1) !== typeof(value2)) {
		return false;
	} else if (typeof(value1) == "object") {
		if ((value1 instanceof Date) != (value2 instanceof Date)) {
			return false;
		} else if ((value1 instanceof Array) != (value2 instanceof Array)) {
			return false;
		}
	}
	return true;
}
