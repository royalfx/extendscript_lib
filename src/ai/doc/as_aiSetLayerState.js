/**
 * @public
 * @param {Layer} layer 
 * @param {boolean} targetVisible 
 * @param {boolean} topLayersOnly 
 */
function as_aiSetLayerState(layer, targetVisible, topLayersOnly) {

	targetVisible = (targetVisible === true);
	
	var layerLocked = layer.locked;
	layer.locked = false;

	if (!topLayersOnly) {
		layer.visible = true;
		var i;

		// layers
		for (i = 0; i < layer.layers.length; i++) {
			as_aiSetLayerState(layer.layers[i], targetVisible, topLayersOnly);
		}

		// compoundPathItems
		// groupItems
		// textFrames
		// graphItems
		// legacyTextItems
		// meshItems
		// nonNativeItems
		// pathItems
		// rasterItems
		// symbolItems
		// pluginItems
		// placedItems
		for (i = 0; i < layer.pageItems.length; i++) {
			layer.pageItems[i].hidden = !targetVisible;
		}
	}

	layer.locked = layerLocked;
	layer.visible = targetVisible;
}