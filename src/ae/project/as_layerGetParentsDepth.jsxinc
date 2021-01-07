// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Get layer parents depth
 * @param {*} layer 
 */
function as_layerGetParentsDepth(layer) {
	var depth = 0;
	var layerParent = layer.parent;
	while (layerParent) {
		depth++;
		layerParent = layerParent.parent;
	}
	return depth;
}
