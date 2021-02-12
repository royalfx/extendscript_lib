// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Feb 05 2021
 * 
 * @param {string} str
 * @returns {string}
 */
function as_stringCapitalWords(str) {
	return str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
		return a.toUpperCase();
	});
}
