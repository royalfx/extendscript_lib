// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.0
// date: Sep 16 2019

/**
 * @description
 * @param {Folder} dirLibrary Library directory
 * @param {File} filLib Out file
 * @param {array} skipDirs Names of directories to skip
 * @returns {File}
 */
function as_singleLibraryJS(dirLibrary, dirRoot, filLib, skipDirs) {

	// GET LIB DIRECTORY
	if (dirLibrary === undefined) {
		var rootFolder = Folder(new File($.fileName).path);
		dirLibrary = rootFolder.selectDlg("Select .js library folder");
		if (!dirLibrary) {
			return null;
		}
	}

	// VARS
	var linesCollector = [];

	function handleDirectory(dir, linesCollector) {
		var nameMatch = (skipDirs === undefined) || (skipDirs.length == 0) || (as_arrayCheckValue(dir.name, skipDirs) == -1);
		if (nameMatch) {
			as_loopFiles(dir, false, handleFile, [linesCollector], undefined, ["js"]);
		}
	}

	function handleFile(file, linesCollector) {
		if ((file.displayName != "lib.js") && (file.displayName != "include.jsxinc") && (file.displayName != "include.js")) {
			var line = "document.write(\'<script type=\"text/javascript\" src=\"" + getFilePath(file) + "\"></script>\');";
			linesCollector.push(line);
		}
	}

	function getFilePath(file) {
		if (dirRoot) {
			var arr = [file.displayName];
			dirParent = file.parent;
			while (dirParent && (!dirRoot || (dirParent.fsName != dirRoot.fsName))) {
				arr.unshift(dirParent.displayName);
				dirParent = dirParent.parent;
			}
			return "./" + arr.join("/");
		} else {
			return file.fsName.replace(new RegExp("\\\\", "g"), "/");
		}

	}

	// DO
	as_loopDirectories(dirLibrary, true, handleDirectory, [linesCollector]);

	// SAVE FILE
	if (!filLib) {
		filLib = File(dirLibrary.fullName + "/" + "lib.js");
	}
	as_fileWrite(filLib, linesCollector.join("\n"), false);

	// RETURN
	return filLib;
}