// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.3
// date: Sep 16 2019

/**
 * @description
 * @param {Folder} dirLibrary Library directory
 * @param {File} fileInclude Out file
 * @param {boolean} includeJS Include JS files
 * @param {array} skipDirs Names of directories to skip
 * @returns {File}
 */
function as_singleLibraryJSXINC(dirLibrary, fileInclude, includeJS, skipDirs) {

	// GET LIB DIRECTORY
	if(dirLibrary === undefined) {
		var rootFolder = Folder(new File($.fileName).path);
		dirLibrary = rootFolder.selectDlg("Select .jsxinc library folder");
		if(!dirLibrary) {
			return null;
		}
	}

	// VARS
	var linesCollector = [];

	function handleDirectory(dir, linesCollector) {

		// CHECK
		var nameMatch = (skipDirs === undefined) || (skipDirs.length == 0) || (as_arrayCheckValue(dir.name, skipDirs) == -1);
		if(nameMatch) {

			// GET FILES
			var arrFiles = dir.getFiles(function (file) {
				var ext = as_getFileExtension(file);
				return (ext == "jsxinc") || (includeJS && (ext == "js"));
			});

			// ADD INCLUDEPATH
			var validFolder = (arrFiles.length > 0) && !((arrFiles.length == 1) && (arrFiles[0].displayName == "include.jsxinc"));
			if(validFolder) {
				linesCollector.push("\n// " + getDirPath(dir).toUpperCase());
				linesCollector.push("#includepath \"" + dir.fullName + "\";");
			}
			as_loopFiles(dir, false, handleFile, [linesCollector], undefined, (includeJS ? ["jsxinc", "js"] : ["jsxinc"]));
		}
	}

	function handleFile(file, linesCollector) {
		if ((file.displayName != "include.jsxinc") && (file.displayName != "include.js") && (file.displayName != "lib.js")) {
			linesCollector.push("#include \"" + file.displayName + "\";");
		}
	}

	function getDirPath(dir) {
		var arrNames = [];
		var dirParent = dir;
		while(dirParent.fsName != dirLibrary.parent.fsName) {
			arrNames.push(dirParent.displayName);
			dirParent = dirParent.parent;
		}
		return arrNames.reverse().join(" > ");
	}

	// DO
	as_loopDirectories(dirLibrary, true, handleDirectory, [linesCollector]);

	// SAVE FILE
	if(!fileInclude) {
		fileInclude = File(dirLibrary.fullName + "/" + "include.jsxinc");
	}
	as_fileWrite(fileInclude, linesCollector.join("\n"), false);

	// OPEN FILE
	// fileInclude.execute();

	// RETURN
	return fileInclude;
}