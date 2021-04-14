// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @param {File} file 
 * @param {Object} dataObject 
 * @param {string} tab 
 * @param {boolean} saveBackup 
 */
function as_fileWriteJSBinary(file, dataObject, tab, saveBackup) {
	
	// Backup
	if (saveBackup && file.exists) {

		// Backup folder
		var dirBackup = Folder(file.parent.fsName + "/.backup");
		if (!dirBackup.exists) {
			dirBackup.create();
		}

		// Save backup
		var fileBackup = new File(dirBackup.fsName + "/" + as_getFileName(file) + "_backup_" + Math.floor(Math.random() * 1000000).toString() + "." + as_getFileExtension(file));
		as_fileWrite(fileBackup, as_fileRead(file), false);
	}

	// Save new
	var stringData = "(function (){return " + JSON.stringify(dataObject, undefined, tab ? "\t" : undefined) + "\n})()";
	return as_fileWrite(file, stringData, false);
}
