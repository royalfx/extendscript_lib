// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.2
// date: 14 Sep 2019

function FileExtension() {
	//
}

FileExtension.PNG = ".png";
FileExtension.JPEG = ".jpg";
FileExtension.AEP = ".aep";
FileExtension.AI = ".ai";
FileExtension.FFX = ".ffx";
FileExtension.TXT = ".txt";
FileExtension.JSX = ".jsx";
FileExtension.JS = ".js";
FileExtension.JSON = ".json";
FileExtension.JSXINC = ".jsxinc";
FileExtension.CSV = ".csv";

/**
 * @public
 * @static
 * @returns {Array}
 */
FileExtension.getList = function() {
	return [
		FileExtension.PNG,
		FileExtension.JPEG,
		FileExtension.AEP,
		FileExtension.FFX,
		FileExtension.TXT,
		FileExtension.JSX,
		FileExtension.JS,
		FileExtension.JSON,
		FileExtension.JSXINC,
		FileExtension.CSV
	];
}