// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Mar 20 2021
 * 
 * @description Clear carriage return
 * @param text {string}
 */
function as_stringClearComments(text) {

	// Clear comments
	text = text.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "");

	// Clear lines with multiple tabs
	text = text.replace(/^\t+$/gm, "");

	// Clear multiple line breaks
	while (text.match(/\n\n/gi) != null) {
		text = text.replace(/\n\n/gi, "\n");
	}

	return text;
}
