// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 17 2019
 * 
 * @param shape {Shape}
 * @param delta {Array} Two-dimensional array
 */
function as_shapeTranslate(shape, delta) {
	
	// Vars
	var verticesNew = [];

	// Translate
	for (var v = 0; v < shape.vertices.length; v++) {
		verticesNew.push(shape.vertices[v] + delta);
	}

	// Create new
	var shapeNew = new Shape();
	shapeNew.vertices = verticesNew;
	shapeNew.inTangents = shape.inTangents;
	shapeNew.outTangents = shape.outTangents;
	shapeNew.closed = shape.closed;

	// Return
	return shapeNew;
}
