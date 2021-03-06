// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @param {string} str 
 */
function as_stringCleanName(str) {
	return str.replace(RegExp("[^a-z 0-9]", "gi"), "");
}
