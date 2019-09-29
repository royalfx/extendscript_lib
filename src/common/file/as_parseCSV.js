// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.1
// date: Sep 19 2019

/**
 * @description Convert CSV to JS object
 * First value (first column) always must have object type
 * When iterating over properties, if "object" type is found, all next properties will be assigned to this new object.
 * If empty value found with type "object" all next properties will be assigned to object from previous line.
 * @param {File} fileCSV
 * @returns {object} Result object
 */
function as_parseCSV(fileCSV) {

	// Skip invalid file
	if(fileCSV == null) {
		return null;
	}

	// Check csv file
	if (!fileCSV.exists) {
		alert("File \"" + fileCSV.fsName + "\" does not exist!", true);
		return null;
	}

	// Read csv file
	fileCSV.open("r");
	var csvString = fileCSV.read();
	fileCSV.close();

	// Define vars
	var linesArray = csvString.split("\n");
	var namesArray = linesArray[0].split(";");
	var typesArray = linesArray[1].split(";");
	var valuesArray;
	var propType, propName, propValue;
	var mainObject = {};
	var currentObject = mainObject;

	// Loop lines
	for (var l = 2; l < linesArray.length; l++) {

		// Skip empty line
		if ((linesArray[l].indexOf(";") == -1) || (linesArray[l].split(";").join("").length == 0)) {
			continue;
		}

		// Get line values
		valuesArray = linesArray[l].split(";");

		// Loop values
		for (var v = 0; v < valuesArray.length; v++) {

			// Get values
			propType = typesArray[v];
			propName = namesArray[v];
			propValue = valuesArray[v];

			// Check if empty value
			if (propValue == "") {
				// If object use prev line object
				if (propType == "object") {
					currentObject = getPrevLineObject(l, v);
					if (!currentObject) {
						throw new Error("as_parseCSV > Parent object not found.")
					}
				}
				// Skip empty value
				continue;
			}

			// Switch by value type
			switch (propType) {
				case "object":
					currentObject = currentObject[propValue] = {};
					break;
				case "string":
					currentObject[propName] = propValue;
					break;
				case "array_string":
					currentObject[propName] = propValue.split(",");
					break;
				case "array_number":
					currentObject[propName] = eval("[" + propValue + "]");
					break;
				case "number":
					currentObject[propName] = parseFloat(propValue);
					break;
				case "boolean":
					currentObject[propName] = (propValue == "true");
					break;
				default:
					alert(arguments.callee.name + " --> " + "Unrecognized property type : " + propType + ", propName: " + propName + ", linesArray[l]: " + linesArray[l] + ", l: " + l, true);
					break;
			}
		}

		// Back to main object
		currentObject = mainObject;
	}

	/**
	 * @description Find valid object in previous lines
	 * @param lineIndex Line index
	 * @param valueIndex Value index
	 */
	function getPrevLineObject(lineIndex, valueIndex) {
		// Loop lines (reverse)
		var object;
		for (var ll = (lineIndex - 1), vvArray; ll >= 2; ll--) {
			// Back to main object
			object = mainObject;
			// Get line values
			vvArray = linesArray[ll].split(";");
			// Loop values
			for (var vv = 0, vValue, vType; vv <= valueIndex; vv++) {
				// Get value & type
				vValue = vvArray[vv];
				vType = typesArray[vv];
				// Check if object
				if (vType == "object") {
					if (vValue == "") {
						// Get prev line object
						object = getPrevLineObject(ll, vv);
					} else {
						// Store next object in chain
						object = object[vValue];
					}
				}
				// Check found
				if ((vv == valueIndex) && (vValue != "")) {
					return object;
				}
			}
		}
		// Return
		return null;
	}

	// Return js object
	return mainObject;
}