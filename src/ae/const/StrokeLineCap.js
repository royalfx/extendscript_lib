// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date 29 Aug 2019
 */
function StrokeLineCap(){
	//
}

StrokeLineCap.BUTT_CAP = 1;
StrokeLineCap.ROUND_CAP = 2;
StrokeLineCap.PROJECTING_CAP = 3;

/**
 * @public
 * @static
 * @returns {Array}
 */
StrokeLineCap.getList = function() {
	return [
		StrokeLineCap.BUTT_CAP,
		StrokeLineCap.ROUND_CAP,
		StrokeLineCap.PROJECTING_CAP
	];
}