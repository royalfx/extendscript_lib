// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 24 2019
 * 
 * @param {Folder} dir 
 * @param {string} fileName 
 */
 function as_findFile(dir, fileName) {
	var tagetFile;
	var files = dir.getFiles();
	for (var f = 0, file; f < files.length; f++) {
		file = files[f];
		if(file instanceof Folder) {
			tagetFile = as_findFile(file, fileName);
			if(tagetFile) {
				return tagetFile;
			}
		} else if(file.displayName == fileName) {
			return file;
		}
	}
	return null;
}