/**
 * 
 * @param {Document} doc 
 */
function as_aiRemoveEmptyLayers(doc) {
	for (var l = 0, layer, layerLocked, layerVisible; l < doc.layers.length; l++) {
		layer = doc.layers[l];
		layerLocked = layer.locked;
		layerVisible = layer.visible;
		layer.locked = false;
		layer.visible = true;
		if (((layer.compoundPathItems.length == 0) && (layer.pathItems.length == 0) && (layer.textFrames.length == 0) && (layer.groupItems.length == 0))) {
			layer.remove();
			l--;
		}
		layer.locked = layerLocked;
		layer.visible = layerVisible;
	}
}
