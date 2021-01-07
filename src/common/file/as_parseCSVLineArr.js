// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @description Parse csv line to array
 * @param {string} line
 * @param {string} separator
 * @returns {Array}
 */
function as_parseCSVLineArr(line, separator) {
    return line.substr(1, line.length - 2).split("\"" + separator + "\"");
}
