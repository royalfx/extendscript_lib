// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @param {File} file
 * @returns {string}
 */
function as_fileToBinaryString(file) {
	try {
		file.open("r");
		file.encoding = "BINARY";
		var bin = file.read();
		file.close();
		return eval(bin.toSource().replace(/^\(new String\(/, "").replace(/\)\)$/, ""));
	} catch (err) {
		alert(err.name + " at line " + err.line + " : " + err.message);
		return null;
	}
}
