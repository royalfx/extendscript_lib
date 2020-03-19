/**
 * @public
 * @param {Document} doc
 * @param {boolean} vis 
 * @param {boolean} topLayersOnly 
 */
function as_aiSetDocVisibility(doc, vis, topLayersOnly) {
	for (var l = 0; l < doc.layers.length; l++) {
		as_aiSetLayerState(doc.layers[l], vis, topLayersOnly);
	}
}