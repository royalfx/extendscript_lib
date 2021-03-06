// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 23 2019
 * 
 * @param {*} prop
 */
function as_exprIsDisabled(prop) {
    if (prop === null) {
        return null;
    }
    
    if (prop.canSetExpression && (prop.expression != "")) {
        if (!prop.expressionEnabled) {
            return true;
        } else if (prop.expressionError.length > 0) {
            return false;
        }
    }

    return false;
}