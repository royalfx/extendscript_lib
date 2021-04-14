// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 17 2019
 */
function as_createEmptyShape() {
	var shape = new Shape();
	shape.vertices = [[0, 0]];
	shape.inTangents = [[0, 0]];
	shape.outTangents = [[0, 0]];
	shape.closed = false;
	return shape;
}
