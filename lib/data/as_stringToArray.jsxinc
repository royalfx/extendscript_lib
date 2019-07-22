// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.3
// date: Mon Feb 05 2018

/**
 * 
 * @description STRING TO ARRAY
 * @param str {string}
 */
function as_stringToArray(str) {

	// REPARE
	str = as_stringRemoveLineBreaks(str);

	if (str.indexOf(",") == -1) {
		str = as_stringClearFirstLastSpaces(str);
		if (str == "") {
			return [];
		} else {
			return [str];
		}
	} else {
		var strArr = str.split(",");
		
		// REMOVE SPACES
		for (var i = 0; i < strArr.length; i++) {
			strArr[i] = as_stringClearFirstLastSpaces(strArr[i]);
			if (strArr[i] == "") {
				strArr.splice(i, 1);
				i--;
			}
		}
		return strArr;
	}
}
