// Copyright (c) 2020 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date 09 Jun 2020
 */
function BrushThemeName(){
	//
}

BrushThemeName.BACKGROUND = "background";
BrushThemeName.DISABLED_BACKGROUND = "disabledBackground";
BrushThemeName.SELECTION = "selection";
BrushThemeName.FOCUS_RING = "focusRing";

/**
 * @public
 * @static
 * @returns {Array}
 */
BrushThemeName.getList = function() {
	return [
		BrushThemeName.BACKGROUND,
		BrushThemeName.DISABLED_BACKGROUND,
		BrushThemeName.SELECTION,
		BrushThemeName.FOCUS_RING
	];
}