// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description Apply ui elements state
 * @param {Window} windowObj 
 * @param {obkect} dataPrefs
 */
function as_uiPrefsApply(windowObj, dataPrefs) {
	
	for (var elementName in dataPrefs) {
		if (dataPrefs.hasOwnProperty(elementName)) {
			var element = windowObj[elementName];
			if(element) {

				// ITEMS
				if(element.items !== undefined) {
					
					element.removeAll();
					for (var i = 0; i < dataPrefs[elementName].items.length; i++) {
						element.add("item", dataPrefs[elementName].items[i]);
					}

					// SELECTION
					element.selection = dataPrefs[elementName].selection;
				}

				// VALUE
				if (element.value !== undefined) {
					element.value = dataPrefs[elementName].value;
				}

				// TEXT
				if (element.text !== undefined) {
					element.text = dataPrefs[elementName].text;
				}
			}
		}
	}
}
