/**
 * @description Parse csv line to json object
 * @param {string} strLine
 * @param {Array} arrNames
 * @param {string} separator
 * @returns {Object}
 */
function as_parseCSVLineObj(strLine, arrNames, separator) {
    var arrLine = as_parseCSVLineArr(strLine, separator);
    var objLine = {};
    for (var i = 0; i < arrNames.length; i++) {
        try {
            objLine[arrNames[i]] = arrLine[i];
        } catch (err) {
            alert(err.message + "\nprop:" + arrLine[i]);
        }
    }
    return objLine;
}
