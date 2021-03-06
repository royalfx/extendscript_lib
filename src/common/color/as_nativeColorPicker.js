// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Native color picker
 * @param
 */
function as_nativeColorPicker() {
	var picker = $.colorPicker();
	if (picker >= 0) {
		var bigint = parseInt(picker.toString(16), 16);
		var r = ((bigint >> 16) & 255) / 255;
		var g = ((bigint >> 8) & 255) / 255;
		var b = (bigint & 255) / 255;
		// stopFocusHandling = false;
		return [r, g, b, 1];
	} else {
		// stopFocusHandling = false;
		return null;
	}
}
