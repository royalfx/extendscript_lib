// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date 29 Aug 2019
 */
function ControlType(){
	//
}

ControlType.SLIDER = "Slider";
ControlType.ANGLE = "Angle";
ControlType.POINT = "Point";
ControlType.POINT3D = "Point3D";
ControlType.CHECKBOX = "Checkbox";
ControlType.COLOR = "Color";
ControlType.LAYER = "Layer";

/**
 * @public
 * @static
 * @returns {Array}
 */
ControlType.getList = function() {
	return [
		ControlType.SLIDER,
		ControlType.ANGLE,
		ControlType.POINT,
		ControlType.POINT3D,
		ControlType.CHECKBOX,
		ControlType.COLOR,
		ControlType.LAYER
	];
}