// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.5
 * @date Feb 13 2021
 * 
 * @param {Window} windowObj 
 * @param {Object} dataUI JS data object created by as_parseCSV()
 * @param {Object} dataImages JS data object with images binary (Optional)
 * @param {Folder} dirImages Folder to save images (Optional)
 * @param {boolean} rewriteFiles If false existing images will be used
 * @param {boolean} shortLinks If true, the window object will have direct links to UI elements.
 */
function as_uiCreateFromData(windowObj, dataUI, dataImages, dirImages, rewriteFiles, shortLinks) {
	
	try {

		// Declare vars
		var uiElement,
			dataElement,
			parentContainer,
			fileName,
			elementsMap = {};

		// Loop json
		for (var elementName in dataUI) {
			if (dataUI.hasOwnProperty(elementName)) {
				dataElement = dataUI[elementName];

				// Get container
				// If parent container is Window/Panel leave empty field in spreadsheet.
				if (dataElement.parent === undefined) {
					parentContainer = windowObj;

				} else if (elementsMap[dataElement.parent]) {
					parentContainer = elementsMap[dataElement.parent];
					
				} else {
					parentContainer = as_uiFindElement(windowObj, dataElement.parent);
				}

				// Check container
				if (!parentContainer) {
					alert(arguments.callee.name + " --> " + "Container " + dataElement.parent + " not found!" + "\nElement: " + elementName);
					continue;
				}

				// Create ui element
				switch (dataElement.type) {
					case "image":
						uiElement = parentContainer.add("image", dataElement.bounds, undefined, {
							name: (elementName)
						});
						break;

					case "button":
						uiElement = parentContainer.add("button", dataElement.bounds, undefined, {
							name: (elementName)
						});
						break;

					case "iconbutton":
						uiElement = parentContainer.add("iconbutton", dataElement.bounds, undefined, {
							name: (elementName),
							style: (dataElement.style || "toolbutton")
						});
						break;

					case "custombutton":
						uiElement = parentContainer.add("custombutton", dataElement.bounds, undefined, {
							name: (elementName)
						});
						parentContainer[elementName] = uiElement;
						break;

					case "statictext":
						uiElement = parentContainer.add("statictext", dataElement.bounds, undefined, {
							name: (elementName),
							multiline: (dataElement.multiline || false),
							justify: (dataElement.justify || "left")
						});
						if (dataElement.justify !== undefined) {
							uiElement.justify = dataElement.justify;
						}
						break;

					case "edittext":
						uiElement = parentContainer.add("edittext", dataElement.bounds, undefined, {
							name: (elementName),
							multiline: (dataElement.multiline || false),
							readonly: (dataElement.readonly || false),
							justify: (dataElement.justify || "left")
						});
						if (dataElement.justify !== undefined) {
							uiElement.justify = dataElement.justify;
						}
						break;
						
					case "group":
						uiElement = parentContainer.add("group", dataElement.bounds, {
							name: (elementName)
						});
						break;

					case "dropdownlist":
						uiElement = parentContainer.add("dropdownlist", dataElement.bounds, dataElement.items, { name: (elementName) });
						uiElement.selection = 0;
						break;

					case "scrollbar":
						uiElement = parentContainer.add("scrollbar", dataElement.bounds, undefined, undefined, undefined, {
							name: (elementName)
						});
						break;

					case "progressbar":
						//add (progressbar [, bounds, value, minvalue, maxvalue,{creation_properties}]);
						uiElement = parentContainer.add("progressbar", dataElement.bounds, undefined, undefined, { name: (elementName) });
						break;

					case "listbox":
						uiElement = parentContainer.add("listbox", dataElement.bounds, undefined, {
							name: (elementName),
							multiselect: (dataElement.multiselect),
							numberOfColumns: (dataElement.numberOfColumns),
							showHeaders: (dataElement.showHeaders),
							columnTitles: (dataElement.columnTitles),
							columnWidths: (dataElement.columnWidths)
						});
						break;

					case "checkbox":
						uiElement = parentContainer.add("checkbox", dataElement.bounds, undefined, {
							name: (elementName)
						});
						break;

					case "tabbedpanel":
						uiElement = parentContainer.add("tabbedpanel", dataElement.bounds, undefined, {
							name: (elementName)
						});
						break;

					case "panel":
						uiElement = parentContainer.add("panel", dataElement.bounds, undefined, {
							name: (elementName),
							borderStyle: (dataElement.borderStyle || "etched")
						});
						break;
						// borderStyle: 
						// black, etched, gray, raised, sunken. Default is etched

					case "tab":
						uiElement = parentContainer.add("tab", dataElement.bounds, undefined, {
							name: (elementName)
						});
						break;

					case "radiobutton":
						uiElement = parentContainer.add("radiobutton", dataElement.bounds, undefined, {
							name: (elementName)
						});
						break;

					default:
						alert(arguments.callee.name + " --> " + "unaccounted type:" + dataElement.type + ", elementName:" + elementName);
						break;
				}

				// Prepare images
				if(dataImages && dirImages) {
					var imagesMap = {};
					if (dataElement.icon !== undefined) {
						fileName = dataElement.icon;
						if (imagesMap[fileName] === undefined) {
							imagesMap[fileName] = as_uiImageFromBinary(dataImages[dataElement.icon], fileName, dirImages, rewriteFiles);
						}
					}
				}
				
				// Skip creation properties
				var skipProps = ["name", "type", "bounds", "style", "multiline", "justify", "readonly", "items", "columnWidths", "columnTitles", "showHeaders", "numberOfColumns", "borderStyle"];
				
				// Loop properties
				for (var propName in dataElement) {
					if(dataElement.hasOwnProperty(propName)) {

						// Check skip
						if (as_arrayCheckValue(propName, skipProps) < 0) {
							var propValue = dataElement[propName];

							// If image
							if(propName == "icon") {
								if(imagesMap && imagesMap[propValue]) {
									uiElement[propName] = imagesMap[propValue];
								}

							// If any property
							} else {
								uiElement[propName] = propValue;
							}
						}
					}
				}

				// Store element link in wondow obj
				if (shortLinks) {
					if (parentContainer != windowObj) {
						if (windowObj[elementName] !== undefined) {
							alert(arguments.callee.name + " --> " + "Can't set window property \"" + as_toString(elementName) + "\". This key already used!");
						} else {
							windowObj[elementName] = uiElement;
						}
					}
				}
			}

			elementsMap[elementName] = uiElement;
		}
		
	} catch (err) {
		alert(propValue);
		alert(arguments.callee.name + " --> " + err.name + " at line " + err.line + " : " + err.message);
	}
}
