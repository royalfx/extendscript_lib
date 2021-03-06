// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @param {*} layer 
 * @param {boolean} preExpression 
 */
function as_layerGetRealScale(layer, preExpression) {
	var t = layer.containingComp.time;
	var s = layer("ADBE Transform Group")("ADBE Scale").valueAtTime(t, preExpression);
	var scaleX = s[0];
	var scaleY = s[1];
	var scaleZ = s[2] || 100;
	var layerParent = layer.parent;
	while (layerParent) {
		s = layerParent("ADBE Transform Group")("ADBE Scale").valueAtTime(t, preExpression);
		scaleX = scaleX * s[0] * 0.01;
		scaleY = scaleY * s[1] * 0.01;
		scaleZ = scaleZ * (s[2] || 100) * 0.01;
		layerParent = layerParent.parent;
	}
	return [scaleX, scaleY, scaleZ];
}
