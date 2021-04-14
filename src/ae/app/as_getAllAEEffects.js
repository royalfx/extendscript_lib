// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Mar 20 2021
 * @returns {Array}
 */
function as_getAllAEEffects() {
	var displayNames = [];
	var matchNames = [];
	for (var e = 0, len = app.effects.length; e < len; e++) {
		displayNames.push(app.effects[e].displayName);
		matchNames.push(app.effects[e].matchName);
	}
	return [displayNames, matchNames];
}