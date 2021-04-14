/**
 * @param {string} path
 * @param {Folder} rootDir 
 * @param {boolean} absolute
 * @returns {string}
 */
function as_convertFilePathJS(path, rootDir, absolute) {

    // Fix slashes
    path = path.replace(/\\/g, "/");

	// Fix disk name
	if (path.indexOf("/d/") == 0) {
		path = path.replace("/d/", "D:/");
	}
	if (path.indexOf("/c/") == 0) {
		path = path.replace("/c/", "C:/");
	}

	// Make absolute
	if (absolute) {
		path = path.replace("..", rootDir.fsName.replace(/\\/g, "/"));
	} else {
		path = path.replace(rootDir.fsName.replace(/\\/g, "/"), "..");
	}
    
    return path;
}