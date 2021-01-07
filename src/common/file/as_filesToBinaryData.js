// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Dec 14 2019
 * 
 * @param {string} fileOfFolder
 * @param {string} fileFilter (Optional)
 * @returns {object}
 */
function as_filesToBinaryData(fileOfFolder, fileFilter) {
	
	if (!fileOfFolder.exists) {
		alert("File of Folder \"" + fileOfFolder + "\" does not exist.", true);
		return null;
	}

	// Declare vars
	var data = {};

	// Get files
	var filesList;
	if (fileOfFolder instanceof File) {
		filesList = [fileOfFolder];
	} else if (fileOfFolder instanceof Folder) {
		filesList = fileOfFolder.getFiles(fileFilter || "*");
	}

	// Loop files
	for (var i = 0, file, fileBin, len = filesList.length; i < len; i++) {
		file = filesList[i];

		fileBin = as_fileToBinaryString(file);
		if (fileBin !== null) {
			data[file.displayName] = fileBin;
		}
	}

	return data;
}
