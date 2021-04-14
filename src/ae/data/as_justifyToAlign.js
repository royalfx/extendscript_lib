// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description Convert Justification to Align
 * @param justification {Number}
 */
function as_justifyToAlign(justification) {
	switch (justification) {
		// 7013
		case ParagraphJustification.LEFT_JUSTIFY:
			return 0;
		// 7015
		case ParagraphJustification.CENTER_JUSTIFY:
			return 1;
		// 7014
		case ParagraphJustification.RIGHT_JUSTIFY:
			return 2;
		default:
			return null;
	}
}
