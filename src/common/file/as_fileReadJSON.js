// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Aug 21 2019
 * 
 * @requires as_fileRead
 * @param {File} file 
 */
function as_fileReadJSON(file) {
	var fileData = as_fileRead(file);
	if(fileData == "") {
		fileData = JSON.stringify({});
	}
	return JSON.parse(fileData);
}
