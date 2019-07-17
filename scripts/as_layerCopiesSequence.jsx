/**
 * 
 * @description SEQUENCE LAYERS
 * @param {AVLayer} layer 
 * @param {number} offset 
 * @param {number} numCopies 
 */
function as_layerCopiesSequence(layer, offset, numCopies) {
	layer.outPoint = layer.startTime + offset;
	for (var l = 1, t, layerPrev; l < numCopies; l++) {
		t = l * offset;
		layerPrev = layer;
		layer = layerPrev.duplicate();
		layer.startTime = t;
		layer.moveAfter(layerPrev);
	}
}
