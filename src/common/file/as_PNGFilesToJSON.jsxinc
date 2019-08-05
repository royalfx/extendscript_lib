// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.0
// date: Jul 22 2019

/**
 * @description PNG files to JSON
 * @param {string} fileOfFolderPath
 * 
 * @returns {object}
 */
function as_PNGFilesToJSON(fileOfFolderPath) {
	
	var filesList;
	var imgFile = Folder(fileOfFolderPath);
	if (!imgFile.exists) {
		alert("File of Folder \"" + fileOfFolderPath + "\" does not exist!", true);
		return null;
	}
	if (imgFile instanceof File) {
		filesList = [imgFile];
	} else if (imgFile instanceof Folder) {
		filesList = imgFile.getFiles("*.png");
	}
	
	var jsonObj = {};
	if (filesList) {

		// LOOP FILES
		for (var i = 0, file, fileBin; i < filesList.length; i++) {
			file = filesList[i];

			fileBin = as_fileToBinaryString(file);
			if(fileBin !== null) {
				jsonObj[file.displayName] = fileBin;
			}
		}
	}

	// RETURN
	return jsonObj;
}
