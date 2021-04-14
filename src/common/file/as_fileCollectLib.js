// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Mar 20 2021
 * 
 * @param {Array} dirsAndFiles [File/Folder]
 * @param {boolean} intoSubfolders
 * @param {Array} filterFileExt ["js", "jsxinc"] (Optional)
 * @param {Array} skipFiles ["filename.js"] (Optional)
 * @returns {string}
 */
function as_fileCollectLib(dirsAndFiles, intoSubfolders, filterFileExt, skipFiles) {

	// Declare vars
	var collector = [];

	// Loop directories
	for (var i = 0; i < dirsAndFiles.length; i++) {
		item = dirsAndFiles[i];

		// File
		if (item instanceof File) {
			handleFile(item, collector);

		// Folder
		} else if (item instanceof Folder) {
			as_loopFiles(item, intoSubfolders, handleFile, [collector], filterFileExt, skipFiles);

		// Error
		} else {
			//
		}
	}

	function handleFile(file, collector) {
		var text = as_fileRead(file);

		// Clear comments
		text = as_stringClearComments(text);
		
		collector.push(text);
	}
	
	return collector.join("\n");
}