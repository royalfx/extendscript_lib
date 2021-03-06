// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date 29 Aug 2019
 */
function LabelColor(){
	//
}

LabelColor.NONE = 0;
LabelColor.RED = 1;
LabelColor.YELLOW = 2;
LabelColor.AQUA = 3;
LabelColor.PINK = 4;
LabelColor.LAVENDER = 5;
LabelColor.PEACH = 6;
LabelColor.SEAFORM = 7;
LabelColor.BLUE = 8;
LabelColor.GREEN = 9;
LabelColor.PURPLE = 10;
LabelColor.ORANGE = 11;
LabelColor.BROWN = 12;
LabelColor.FUCHSIA = 13;
LabelColor.CYAN = 14;
LabelColor.SANDSTONE = 15;
LabelColor.DARKGREEN = 16;

/**
 * @public
 * @static
 * @returns {Array}
 */
LabelColor.getList = function() {
	return [
		LabelColor.NONE,
		LabelColor.RED,
		LabelColor.YELLOW,
		LabelColor.AQUA,
		LabelColor.PINK,
		LabelColor.LAVENDER,
		LabelColor.PEACH,
		LabelColor.SEAFORM,
		LabelColor.BLUE,
		LabelColor.GREEN,
		LabelColor.PURPLE,
		LabelColor.ORANGE,
		LabelColor.BROWN,
		LabelColor.FUCHSIA,
		LabelColor.CYAN,
		LabelColor.SANDSTONE,
		LabelColor.DARKGREEN
	];
}