// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @description Linear interpolation
 * @param t {number}
 * @param tMin {number}
 * @param tMax {number}
 * @param a {number}
 * @param b {number}
 */
function as_linear(t, tMin, tMax, a, b) {
	if (arguments.length == 3) {
		a = tMin;
		b = tMax;
	} else {
		if (tMin == tMax) {
			t = tMin;
		} else {
			t = (as_clamp(t, tMin, tMax) - tMin) / (tMax - tMin);
		}
	}
	return a + t * (b - a);
}
