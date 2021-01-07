// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date 29 Aug 2019
 */
function VersionNum(){
	//
}

VersionNum.MAJOR = 0;
VersionNum.MINOR = 1;
VersionNum.PATCH = 2;

/**
 * @public
 * @static
 * @returns {Array}
 */
VersionNum.getList = function() {
	return [
		VersionNum.MAJOR,
		VersionNum.MINOR,
		VersionNum.PATCH
	];
}