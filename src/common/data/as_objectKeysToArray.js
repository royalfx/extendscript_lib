/**
 * @description
 * @param {Object}
 * @returns {Array} 
 */
function  as_objectKeysToArray(obj){
    var arr = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr[arr.length] = key;
        }
    }
    return arr;
}