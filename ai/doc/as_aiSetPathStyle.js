/**
 * 
 * @param {*} pathValue 
 * @param {*} fillColor 
 * @param {boolean} stroked 
 * @param {*} strokeColor 
 * @param {number} strokeWidth 
 */
function as_aiSetPathStyle(pathValue, fillColor, stroked, strokeColor, strokeWidth) {
	var layer = pathValue.layer;
	var layerLocked = layer.locked;
	var layerVisible = layer.visible;
	layer.locked = false;
	layer.visible = true;
	var pathLocked = pathValue.locked;
	var pathVisible = pathValue.visible;
	var pathHidden = pathValue.hidden;
	pathValue.locked = false;
	pathValue.visible = true;
	pathValue.hidden = false;
	if (fillColor !== undefined) {
		// alert(fillColor);
		pathValue.fillColor = fillColor;
	}
	if (stroked !== undefined) {
		pathValue.stroked = stroked;
	}
	if (strokeColor !== undefined) {
		pathValue.strokeColor = strokeColor;
	}
	if (strokeWidth !== undefined) {
		pathValue.strokeWidth = strokeWidth;
	}
	layer.locked = layerLocked;
	layer.visible = layerVisible;
	pathValue.locked = pathLocked;
	pathValue.visible = pathVisible;
	pathValue.hidden = pathHidden;
}
