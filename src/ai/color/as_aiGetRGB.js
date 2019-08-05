/**
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 */
function as_aiGetRGB(r, g, b) {
	var rgb = new RGBColor();
	rgb.red = r;
	rgb.green = g;
	rgb.blue = b;
	return rgb;
}
