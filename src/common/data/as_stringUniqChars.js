// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description Make chars unique
 * @param str {string}
 */
function as_stringUniqChars(str) {
	var strUniq = "";
	var len = str.length;
	for (var i = 0; i < len; i++) {
		var c = str.charAt(i);
		if (strUniq.indexOf(c) < 0) {
			strUniq += c;
		}
	}
	return strUniq;
}
