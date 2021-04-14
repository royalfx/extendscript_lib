// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 */
function as_checkSecurityPrefSet() {
	var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
	if (securitySetting == 1) {
		return true;
	} else {
		return "This script requires the scripting security preference to be set. Go to the \"General\" panel of the application preferences and make sure \"Allow Scripts to Write Files and Access Network\" is checked.";
	}
}
