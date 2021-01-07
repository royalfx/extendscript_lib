// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Jul 16 2019
 * 
 * @param propValue 
 * @param obj 
 */
function as_objectGetPropName(propValue, obj) {
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            if (obj[p] == propValue) {
                return p;
            }
        }
    }
    return null;
}
