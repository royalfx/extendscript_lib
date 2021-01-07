// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @param {string} folderName 
 * @param {string} subFolderName 
 */
function as_getUserDataFolder(folderName, subFolderName) {
	
	// Check arguments
	if (!folderName) {
		throw new Error("Folder name required!");
	}

	// Temp folder
	var userDataFolder = Folder(Folder.userData.fsName + "/" + folderName);
	if (!userDataFolder.exists) {
		if (!userDataFolder.create()) {
			alert("Error creating new folder in this location:\n" + userDataFolder.fsName, true);
			return null;
		}
	}

	// Subfolder
	if (subFolderName) {
		var subFolder = Folder(userDataFolder.fsName + "/" + subFolderName);
		if (!subFolder.exists) {
			if (!subFolder.create()) {
				alert("Error creating new folder in this location:\n" + subFolder.fsName, true);
				return null;
			}
		}
		return subFolder;
	}
	else {
		return userDataFolder;
	}
}
