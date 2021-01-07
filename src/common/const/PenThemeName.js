// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date 09 Jun 2020
 */
function PenThemeName(){
	//
}

PenThemeName.FOREGROUND = "foreground";
PenThemeName.DISABLED_FOREGROUND = "disabledForeground";
PenThemeName.SELECTION = "selection";

/**
 * @public
 * @static
 * @returns {Array}
 */
PenThemeName.getList = function() {
	return [
		PenThemeName.FOREGROUND,
		PenThemeName.DISABLED_FOREGROUND,
		PenThemeName.SELECTION
	];
}