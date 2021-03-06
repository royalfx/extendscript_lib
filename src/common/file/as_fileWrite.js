// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @param {File} file 
 * @param {string} fileData 
 * @param {boolean} isBinary 
 */
function as_fileWrite(file, fileData, isBinary) {
	
	// ENCODING
	file.encoding = isBinary ? "BINARY" : "UTF-8";

	// OPEN
	if (!file.open("w")) {
		alert("Could not open file: " + file.fsName + "\nmessage: " + file.error, true);
		return null;
	}

	// WRITE
	if (!file.write(isBinary ? [fileData] : fileData)) {
		alert("Could not write file: " + file.fsName + "\nmessage: " + file.error, true);
		file.close();
		return null;
	}
	file.close();

	// CHECK ERROR
	if (file.error != "") {
		alert(file.error, true);
		return null;
	}
	
	// Return
	return file;
}
