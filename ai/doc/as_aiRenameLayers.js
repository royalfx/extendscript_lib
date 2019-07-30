/**
 * 
 * @param {Document} doc 
 * @param {string} nameOld 
 * @param {string} nameNew 
 */
function as_aiRenameLayers(doc, nameOld, nameNew) {
	for (var l = 0, layer; l < doc.layers.length; l++) {
		layer = doc.layers[l];
		layer.name = layer.name.replace(nameOld, nameNew);
	}
}