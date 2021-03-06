// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description RENAME ELEMENT
 * @param {*} element Item / Layer / Effect
 * @param {*} nameOld 
 * @param {*} nameNew 
 */
function as_elementRename(element, nameOld, nameNew) {
	element.name = nameNew;
	app.project.autoFixExpressions(nameOld, nameNew);
}
