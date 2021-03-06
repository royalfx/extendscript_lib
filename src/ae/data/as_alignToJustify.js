// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description
 * @param align {Number} 0-2
 */
function as_alignToJustify(align) {
	return [ParagraphJustification.LEFT_JUSTIFY, ParagraphJustification.CENTER_JUSTIFY, ParagraphJustification.RIGHT_JUSTIFY][align];
}
