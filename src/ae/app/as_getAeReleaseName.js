// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description GET AE RELEASE NAME
 * @param version {string}
 */
function as_getAeReleaseName(version) {
	var verRelease = as_getAeReleaseVersion(version);
	for (var n in AEVersion) {
		if (AEVersion.hasOwnProperty(n)) {
			if (as_compareVersions(verRelease, AEVersion[n]) >= 0) {
				return n;
			}
		}
	}
	return null;
}
