// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description NORMALIZE RGB
 * @param rgb {Array}
 */
function as_normalizeRGB(rgb) {
	for (var i = 0; i < rgb.length; i++) {
		rgb[i] = as_clamp(rgb[i], 0, 1);
	}
	rgb[3] = 1;
	return rgb;
}
