/**
 * @version 1.0.2
 * @date Oct 09 2024
 * 
 * @param {Array} dirsAndFiles [File/Folder]
 * @param {Folder} rootDir
 * @param {boolean} intoSubfolders
 * @param {Array} filterFileExt [string] ["js", "jsxinc"] (Optional)
 * 
 * @description Only absolute paths
 * @returns {string}
 */
function as_fileCollectIncludes(dirsAndFiles, rootDir, intoSubfolders, filterFileExt) {
	var collector = [];

	// Loop items
    for (var i = 0, item; i < dirsAndFiles.length; i++) {
		item = dirsAndFiles[i];

		// File
		if (item instanceof File) {
			handleFile(item, collector);

		// Folder
		} else if (item instanceof Folder) {
			as_loopFiles(item, intoSubfolders, handleFile, [collector], filterFileExt);

		// Error
		} else {
			//
		}
	}

	function handleFile(file, collector) {
		var filePath = as_convertFilePath(file.fullName, rootDir, true);
		collector.push("#include \"" + filePath + "\";");
	}

	collector = as_arrayMakeUnique(collector);
	return collector.join("\n");
}