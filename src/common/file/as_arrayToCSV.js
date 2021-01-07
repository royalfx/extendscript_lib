// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Aug 02 2019
 * 
 * @description Stringify array
 * @param {array} arr 
 */
function as_arrayToCSV(arr, separator) {
    if(separator === undefined){
        separator = ",";
    }
	for (var l = 0; l < arr.length; l++) {
        arr[l] = "\"" + arr[l].join("\"" + separator + "\"") + "\"";
    }
    return arr.join("\n");
}