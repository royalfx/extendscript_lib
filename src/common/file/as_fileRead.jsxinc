// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.0
// date: Jul 22 2019

/**
 * 
 * @param {File} file 
 */
function as_fileRead(file) {

	if (!file.exists) {
		alert("File: " + file.fsName + " does not exist!", true);
		return null;
	} else {
		try {

			// OPEN
			if (!file.open("r")) {
				alert("Could not read file: " + file.fsName + "\nmessage: " + file.error, true);
				return null;
			}

			// READ
			var fileData = file.read();
			file.close();

			// CHECK ERROR
			if (file.error != "") {
				alert(file.error, true);
				return null;
			}

			// RETURN
			return fileData;
		} catch (err) {
			alert("Could not read file: " + file.fsName + "\nmessage: " + err.message, true);
			return null;
		}
	}
}
