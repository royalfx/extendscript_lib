// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @param ver1 {string}
 * @param ver2 {string}
 * @param threshold {number} VersionNum.MAJOR | VersionNum.MINOR | VersionNum.PATCH (start from 0)
 * @description COMPARE VERSIONS
 * @return 1 (ver2 > ver1) | -1 (ver2 < ver1) | 0 (ver2 == ver1)
 */
function as_compareVersions(ver1, ver2, threshold) {
	if (ver1 == ver2) {
		return 0;
	}
	var ver1Arr = ver1.split(".");
	var ver2Arr = ver2.split(".");
	threshold = (threshold === undefined) ? Math.max(ver1Arr.length, ver2Arr.length) - 1 : threshold;
	for (var i = 0, v1, v2; i <= threshold; i++) {
		v1 = parseInt(ver1Arr[i]) || 0;
		v2 = parseInt(ver2Arr[i]) || 0;
		if (v1 == v2) {
			continue;
		}
		return (v2 > v1) ? 1 : -1;
	}
	return 0;
}
