// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 17 2019
 * 
 * @param shape {Shape} Shape object
 * @param scale {number} 0-1
 * @returns {Shape} Result shape
 */
function as_shapeScale(shape, scale) {

	// Vars
	var vectricesNew = [];
	var inTangentsNew = [];
	var outTangentsNew = [];

	// Scale props
	for (var v = 0; v < shape.vertices.length; v++) {
		vectricesNew.push(shape.vertices[v] * scale);
	}
	for (var v = 0; v < shape.inTangents.length; v++) {
		inTangentsNew.push(shape.inTangents[v] * scale);
	}
	for (var v = 0; v < shape.outTangents.length; v++) {
		outTangentsNew.push(shape.outTangents[v] * scale);
	}
	
	// Create new
	var shapeNew = new Shape();
	shapeNew.vertices = vectricesNew;
	shapeNew.inTangents = inTangentsNew;
	shapeNew.outTangents = outTangentsNew;
	shapeNew.closed = shape.closed;

	return shapeNew;
}
