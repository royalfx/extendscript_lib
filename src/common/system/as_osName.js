// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.0
// date: Jul 22 2019

function as_osName() {
	
	// DO
	var os = system.osName;
	if (!os.length) {
		os = $.os;
	}
	var app_os = (os.indexOf("Win") != -1) ? "Win" : "Mac";

	// RETUEN
	return app_os;
}