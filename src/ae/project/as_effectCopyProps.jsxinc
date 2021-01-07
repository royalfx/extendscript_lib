// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * Only one level
 * @version 1.0.1
 * @date Jan 07 2021
 * @param {effect} effectFrom
 * @param {effect} effectTo
 * @description Copy effect props
 */
function as_effectCopyProps(effectFrom, effectTo) {
	var errs = [];
	var err = "";
	for (var i = 1, len = Math.min(effectFrom.numProperties, effectTo.numProperties); i <= len; i++) {
		err = as_propCopy(effectFrom(i), effectTo(i));
		if (err.length > 0) {
			errs[errs.length] = err;
		}
	}
	return errs;
}
