// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.1
// date: Jul 17 2019

/**
 * 
 * @param url  {string} Url to open
 */
function as_openURL(url) {
	var isPrefSet = as_checkSecurityPrefSet();
	if (isPrefSet === true) {
		if (as_osName() == "Win") {
			system.callSystem("cmd.exe /c\"start " + url + "\"");
		} else {
			system.callSystem("open \"" + url + "\"");
		}
	} else {
		alert(isPrefSet);
	}
}