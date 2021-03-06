// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date 09 Dec 2019
 */
function ItemTypeName(){
	//
}

/**
 * @constant
 * @type {string}
 */
ItemTypeName.COMPOSITION = "Composition";

/**
 * @constant
 * @type {string}
 */
ItemTypeName.FOOTAGE = "Footage";

/**
 * @constant
 * @type {string}
 */
ItemTypeName.FOLDER = "Folder";

/**
 * @static
 * @public
 * @returns {Array}
 */
ItemTypeName.getList = function() {
	return [
		ItemTypeName.COMPOSITION,
		ItemTypeName.FOOTAGE,
		ItemTypeName.FOLDER
	];
}