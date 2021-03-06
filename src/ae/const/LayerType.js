// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date 29 Aug 2019
 */
function LayerType(){
	//
}

LayerType.CAMERA = "CameraLayer";
LayerType.LIGHT = "LightLayer";
LayerType.SOLID = "SolidLayer";
LayerType.FOOTAGE = "FootageLayer";
LayerType.TEXT = "TextLayer";
LayerType.SHAPE = "ShapeLayer";
LayerType.AUDIO = "AudioLayer";
LayerType.PRECOMP = "PrecompLayer";

/**
 * @public
 * @static
 * @returns {Array}
 */
LayerType.getList = function() {
	return [
		LayerType.CAMERA,
		LayerType.LIGHT,
		LayerType.SOLID,
		LayerType.FOOTAGE,
		LayerType.TEXT,
		LayerType.SHAPE,
		LayerType.AUDIO,
		LayerType.PRECOMP
	];
}