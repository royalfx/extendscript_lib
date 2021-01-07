// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description Check name is indexed
 * @param name {string}
 * @return splitAt - index of delimiter
 */
function as_nameIndexedCheck(name) {
	
	var splitAt = Math.max(name.lastIndexOf("_"), name.lastIndexOf(" "));
	if (splitAt == -1) {
		// Delimiter not found
		return -1;
	}
	var inxString = name.substr(splitAt + 1);
	if (inxString.length == 0) {
		// Index not found
		return -1;
	}
	var arrMatch = inxString.match(RegExpPattern.NUMBERS);
	if (arrMatch !== null) {
		// Invalid index
		return -1;
	}
	return splitAt;
}
