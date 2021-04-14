// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Jul 16 2019
 * 
 * @param prop {*} Target property
 * @returns {boolean}
 */
function as_propIsLayer(prop) {
	if(!isValid(prop)) {
		return false;
	}
	if(!prop) {
		return false;
	}
	if ((prop instanceof AVLayer) || (prop instanceof CameraLayer) || (prop instanceof LightLayer) || (prop instanceof TextLayer) || (prop instanceof ShapeLayer)) {
		return true;
	}
	return false;
}