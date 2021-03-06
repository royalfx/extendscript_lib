// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Change text document
 * @param {Property} textProp 
 * @param {Object} textDocProps Use TextDocProperty
 * @param {number} time 
 */
function as_textSetProperties(textProp, textDocProps, time) {

	// Vars
	var textDoc = textProp.value;

	// Check
	if (textDocProps[TextDocProperty.FONT] !== undefined) {
		textDoc.font = textDocProps[TextDocProperty.FONT];
	} else if (textDocProps[TextDocProperty.JUSTIFICATION] !== undefined) {
		textDoc.justification = textDocProps[TextDocProperty.JUSTIFICATION];
	} else if (textDocProps[TextDocProperty.FONT_SIZE] !== undefined) {
		textDoc.fontSize = textDocProps[TextDocProperty.FONT_SIZE];
	} else if (textDocProps[TextDocProperty.TRACKING] !== undefined) {
		textDoc.tracking = textDocProps[TextDocProperty.TRACKING];
	} else if (textDocProps[TextDocProperty.COLOR] !== undefined) {
		textDoc.fillColor = textDocProps[TextDocProperty.COLOR];
	} else if (textDocProps[TextDocProperty.TEXT] !== undefined) {
		textDoc.text = textDocProps[TextDocProperty.TEXT];
	}

	// Set
	if (textProp.numKeys > 0) {
		textProp.setValueAtTime(time, textDoc);
	} else {
		textProp.setValue(textDoc);
	}
}
