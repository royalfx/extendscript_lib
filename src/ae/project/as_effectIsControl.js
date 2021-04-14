// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Is control effect
 * @param {Effect} effect 
 */
function as_effectIsControl(effect) {
	if ((effect == null) || !isValid(effect)) {
		return null;
	}
	if (!effect.isEffect) {
		return false;
	}
	if (("ADBE Slider Control, ADBE Point Control, ADBE Angle Control, ADBE Checkbox Control, ADBE Layer Control, ADBE Point3D Control, ADBE Color Control").indexOf(effect.matchName) >= 0) {
		return true;
	}
	return false;
}
