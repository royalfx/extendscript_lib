// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 23 2019
 * 
 * @description SET EXPRESSION TO PROPERTY
 * @param {*} prop
 * @param {boolean} alertErrors
 */
function as_exprSet(prop, expr, alertErrors) {
	try {
		app.beginSuppressDialogs();
		prop.expression = expr;
		app.endSuppressDialogs(false);
	} catch (err) {
		if(alertErrors) {
			alert(err.message);
		}
	}
}