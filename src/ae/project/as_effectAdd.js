// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @param {Layer} layer 
 * @param {string} matchName 
 * @param {string} effectName 
 * @param {*} value01 
 * @param {boolean} enabled 
 */
function as_effectAdd(layer, matchName, effectName, value01, enabled) {
	var effect = layer("ADBE Effect Parade").addProperty(matchName);
	effect.name = effectName;
	if (value01 !== undefined) {
		effect(1).setValue(value01);
	}
	if (enabled !== undefined) {
		effect.enabled = enabled;
	}
	return effect;
}
