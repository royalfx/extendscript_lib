/**
 * @param {string} path
 * @param {Folder} rootDir 
 * @param {boolean} absolute
 * @returns {string}
 */
function as_convertFilePath(path, rootDir, absolute) {

    // Fix slashes
    path = path.replace(/\\/g, "/");

	// Fix disk name
	path = path.replace("D:/", "/d/");
	path = path.replace("C:/", "/c/");

	// Make absolute
	if (absolute) {
		path = path.replace("..", rootDir.fullName);
	} else {
		path = path.replace(rootDir.fullName, "..");
	}
    
    return path;
}