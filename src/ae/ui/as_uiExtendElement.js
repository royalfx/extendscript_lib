// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Dec 30 2019
 * 
 * @param {Object} element UI Element
 * @param {string} stateName Name of the state
 * @param {Object} stateData State properties data object
 * @description Extends UI Element
 */
function as_uiExtendElement(element, stateName, stateData) {

    // Init
    var inited = (element.statesMap != null);
    if (!inited) {

		/**
		 * @public
		 * @type {Object}
		 * @description States properties data map
		 */
		element.statesMap = {};
		
		/**
		 * @public
		 * @param {string} stateName
		 * @returns {void}
		 */
        element.setState = function(stateName) {

			// Check arguments
			if (typeof stateName !== "string") {
				throw new Error("State name is not valid.");
			}

            // Retrieve state properties data
			var stateData = element.statesMap[stateName];
            if (stateData === undefined) {
                throw new Error("State \"" + stateName + "\" not found in \"" + element.properties.name + "\"!");
            }

            // Set state properties
            for (var prop in stateData) {
                if (stateData.hasOwnProperty(prop)) {
                    element[prop] = stateData[prop];
                }
			}
			
			// Set current state
            this.state = stateName;
		}
		
		/**
		 * @public
		 * @returns {string}
		 */
        element.getState = function () {
            return this.state;
        }
    }

    // Store new state
    if (element.statesMap[stateName] === undefined) {
        element.statesMap[stateName] = stateData;
    } else {
        throw new Error("State with key \"" + stateName + "\" already added!");
    }

    // Set default state
    if (!inited) {
        element.setState(stateName);
    }
}