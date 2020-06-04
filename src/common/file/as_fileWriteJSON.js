// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// 
// 

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * @requires as_fileRead
 * @requires as_fileWrite
 * @requires as_getFileName
 * @requires as_getFileExtension
 * 
 * @param {File} file 
 * @param {object} dataObject 
 * @param {string} tab 
 * @param {boolean} saveBackup 
 */
function as_fileWriteJSON(file, dataObject, tab, saveBackup) {
	
	// BACKUP
	if (saveBackup && file.exists) {

		// BACKUP FOLDER
		var dirBackup = Folder(file.parent.fsName + "/.backup");
		if (!dirBackup.exists) {
			dirBackup.create();
		}

		// SAVE BACKUP
		var fileBackup = new File(dirBackup.fsName + "/" + as_getFileName(file) + "_backup_" + Math.floor(Math.random() * 1000000).toString() + "." + as_getFileExtension(file));
		as_fileWrite(fileBackup, as_fileRead(file), false);
	}

	// RETURN
	return as_fileWrite(file, JSON.stringify(dataObject, undefined, tab ? "\t" : undefined), false);
}
