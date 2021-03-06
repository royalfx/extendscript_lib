// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description RGB TO HEX
 * @param rgb {Array}
 */
function as_rgbToHex(rgb) {
	return ((1 << 24) + (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + rgb[2] * 255).toString(16).slice(1).toUpperCase();
}
