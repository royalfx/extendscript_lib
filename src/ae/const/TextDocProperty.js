// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date 29 Aug 2019
 */
function TextDocProperty(){
	//
}

TextDocProperty.FONT = "FONT";
TextDocProperty.FONT_SIZE = "FONT_SIZE";
TextDocProperty.TRACKING = "TRACKING";
TextDocProperty.COLOR = "COLOR";
TextDocProperty.JUSTIFICATION = "JUSTIFICATION";
TextDocProperty.TEXT = "TEXT";

/**
 * @public
 * @static
 * @returns {Array}
 */
TextDocProperty.getList = function() {
	return [
		TextDocProperty.FONT,
		TextDocProperty.FONT_SIZE,
		TextDocProperty.TRACKING,
		TextDocProperty.COLOR,
		TextDocProperty.JUSTIFICATION,
		TextDocProperty.TEXT
	];
}