// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description HSL TO RGB
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 1].
 *
 * @param   {number}  h	   The hue
 * @param   {number}  s	   The saturation
 * @param   {number}  l	   The lightness
 * @return  {Array}		   The RGB representation
 */
function as_hslToRgb(hsl) {
	var r, g, b, h = hsl[0], s = hsl[1], l = hsl[2];
	if (s == 0) {
		// achromatic
		r = g = b = l;
	} else {
		var hue2rgb = function hue2rgb(p, q, t) {
			if (t < 0) {
                t += 1;
            }
			if (t > 1) {
				t -= 1;
            }
			if (t < 1 / 6) {
				return p + (q - p) * 6 * t;
            }
			if (t < 1 / 2) {
				return q;
            }
			if (t < 2 / 3) {
				return p + (q - p) * (2 / 3 - t) * 6;
            }
			return p;
		};
		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}
	return as_normalizeRGB([r, g, b]);
}
