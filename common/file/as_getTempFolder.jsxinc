// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.0
// date: Jul 22 2019

/**
 * 
 * @param {string} folderName 
 * @param {string} subFolderName 
 */
function as_getTempFolder(folderName, subFolderName) {

	// CHECK ARGS
	if (!folderName) {
		throw new Error("Folder name required!");
	}

	// TEMP FOLDER
	var tempFolder = Folder(Folder.temp.fsName + "/" + folderName);
	if (!tempFolder.exists) {
		if (!tempFolder.create()) {
			alert("Error creating new folder in this location:\n" + tempFolder.fsName, true);
			return null;
		}
	}

	// SUBFOLDER
	if (subFolderName) {
		var subFolder = Folder(tempFolder.fsName + "/" + subFolderName);
		if (!subFolder.exists) {
			if (!subFolder.create()) {
				alert("Error creating new folder in this location:\n" + subFolder.fsName, true);
				return null;
			}
		}
		return subFolder;
	} else {
		return tempFolder;
	}
}
