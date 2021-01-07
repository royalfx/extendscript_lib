// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Oct 12 2019
 * 
 * @description Get AE release version
 * @param version {string} AEVersion
 */
function as_getAeReleaseVersion(version) {

	// Declare vars
	var verMatch = null;
	var versionsList = AEVersion.getList();

	// Loop AE versions
	for (var v = 0, ver; v < versionsList.length; v++) {
		ver = versionsList[v];

		// Compare
		var compare = as_compareVersions(version, ver);
		if (compare == 0) {
			// Found
			verMatch = ver;
			break;
		} else if (compare > 0) {
			// Return prev
			break;
		} else {
			// Continue
			verMatch = ver;
		}
	}

	return verMatch;
}
